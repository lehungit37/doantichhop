import { error } from "jquery";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Redirect, useHistory } from "react-router";
import { AuthContext } from "../../../Context/AuthProvider";
import { AdminContext } from "../../../Context/Provider";
import { auth, db } from "../../../Firebase/config";
import useFireStore from "../../../Hooks/useFireStore";

const LoginAdmin = () => {
  const history = useHistory();

  const { currentUser, signIn } = useContext(AuthContext);

  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  var uid;
  if (currentUser) {
    uid = currentUser.uid;
  }
  const conditionUser = useMemo(() => {
    return {
      fieldName: "uid",
      operator: "==",
      compareValue: uid,
    };
  }, [uid]);
  const initValue = {
    email: "",
    password: "",
  };

  const user = useFireStore("KhachHang", conditionUser);
  const [valueInput, setValueInput] = useState(initValue);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(valueInput.email, valueInput.password)
      .then(() => {
        if (user[0].role === "admin") {
          setIsAdmin(true);
          history.push("/admin")
        }
        else{
          alert("Bạn không có quyền truy cập")
        }
       
      }).catch((error)=>{
        alert(error)
      });
  };

  return (
    <div className="login__admin">
      <div className="container">
        <h4 className="logo">
          <span>XOSS</span> Admin
        </h4>
        <form onSubmit={handleLogin}>
          <div class="form-group">
            <label htmlFor="exampleInputEmail1">Name Login</label>
            <input
              type="email"
              value={valueInput.email}
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter name login"
              onChange={handleChangeInput}
            />
          </div>
          <div class="form-group">
            <label htmlFor="exampleInputEmail1">Password Login</label>
            <input
              type="password"
              name="password"
              value={valueInput.password}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter password login"
              onChange={handleChangeInput}
            />
          </div>
          <button className="btn btn-primary" onSubmit={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
