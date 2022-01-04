import React, { useEffect, useRef } from "react";
import "./Register.scss";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useAuth } from "../../../Context/AuthProvider";
import $ from "jquery";

import Toask from "../Toask";
export default function RegisterPage() {
  const { signUp, loginFacebook, loginGoogle } = useAuth();
  const history = useHistory();
  const initValue = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    photoURL: "",
    role: "user"
  };
  const [value, setValue] = useState(initValue);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // console.log(currentUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      value.password &&
      value.confirmPassword &&
      value.password !== value.confirmPassword
    ) {
      return setError("Mật khẩu không khớp. Vui lòng nhập lại");
    }

    try {
      await signUp(value.email, value.password, value);

      setLoading(true);
      history.push("/login");
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
    setLoading(false);
  };
  const handleChangeValue = (e) => {
    const name = e.target.name;
    const valueChange = e.target.value;
    setValue({
      ...value,
      [name]: valueChange,
    });
  };

  const handleLoginFacebook = () => {
    loginFacebook().then(() => {
      history.push("/");

      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1500
      );
    });
  };

  const handleLoginGoogle = ()=>{
    loginGoogle().then(() => {
      history.push("/");

      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1500
      );
    });
  }
  return (
    <div id="logreg-forms">
      {error ? <Toask message={error} setError={setError} /> : null}

      <form className="form-signup" onSubmit={handleSubmit}>
        <Link to="/" className="back__home">
          {" "}
          <i className="fas fa-angle-left" /> Back Home
        </Link>
        <h1
          className="h3 mb-3 font-weight-normal"
          style={{ textAlign: "center" }}
        >
          {" "}
          Register
        </h1>
        <input
          name="displayName"
          type="text"
          onChange={handleChangeValue}
          id="user-name"
          className="form-control"
          placeholder="Full name"
          required
          autofocus
        />
        <input
          type="email"
          onChange={handleChangeValue}
          name="email"
          id="user-email"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <input
          type="password"
          name="password"
          id="user-pass"
          onChange={handleChangeValue}
          className="form-control"
          placeholder="Password"
          required
          autofocus
        />
        <input
          type="password"
          onChange={handleChangeValue}
          name="confirmPassword "
          id="user-repeatpass"
          className="form-control"
          placeholder="Repeat Password"
          required
          autofocus
        />
        <button
          disabled={loading}
          className="btn btn-primary btn-block"
          type="submit"
        >
          <i className="fas fa-user-plus" /> Sign Up
        </button>

        <p style={{ textAlign: "center" }}>OR</p>
        <div className="social__btn">
          <div className="social-login">
            <button
              className="btn facebook-btn social-btn"
              type="button"
              onClick={handleLoginFacebook}
            >
              <span>
                <i className="fab fa-facebook-f" /> Sign up with Facebook
              </span>{" "}
            </button>
          </div>
          <div className="social-login">
            <button onClick = {handleLoginGoogle} className="btn google-btn social-btn" type="button">
              <span>
                <i className="fab fa-google-plus-g" /> Sign up with Google+
              </span>{" "}
            </button>
          </div>
        </div>
        <Link to="/login" id="cancel_signup">
          <i className="fas fa-angle-left" /> Back
        </Link>
      </form>
    </div>
  );
}
