import React from "react";
import "./Login.scss";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../Context/AuthProvider";
import { useState } from "react/cjs/react.development";
import Toask from "../Toask";
import $ from "jquery";

export default function LoginPage() {
  const { signIn, loginFacebook, loginGoogle } = useAuth();
  const initValue = {
    email: "",
    password: "",
  };
  const [value, setValue] = useState(initValue);
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    // const { additionalUserInfo, user } = await auth.signInWithPopup(emailProvider)

    e.preventDefault();
    signIn(value.email, value.password)
      .then(() => {
        setError("Đăng nhập thành công");
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      });
    // console.log(additionalUserInfo);
    setIsOpen(true)
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

  const handleLoginGoogle = () => {
    loginGoogle().then(() => {
      history.push("/");
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1500
      );
    });
  };

  return (
    <div id="logreg-forms">
      {isOpen ? <Toask message={error} setError={setError} setIsOpen = {setIsOpen} /> : null}
      <form className="form-signin" onSubmit={handleSubmit}>
        <Link to="/" className="back__home">
          {" "}
          <i className="fas fa-angle-left" /> Back Home
        </Link>
        <h1
          className="h3 mb-3 font-weight-normal"
          style={{ textAlign: "center" }}
        >
          {" "}
          Sign in
        </h1>

        <input
          onChange={handleChangeValue}
          name="email"
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <input
          onChange={handleChangeValue}
          name="password"
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <button onSubmit={handleSubmit}className="btn btn-success btn-block" type="submit">
          <i className="fas fa-sign-in-alt" /> Sign in
        </button>
        <p style={{ textAlign: "center" }}> OR</p>
        <div className="social-login">
          <button
            onClick={handleLoginFacebook}
            className="btn facebook-btn social-btn"
            type="button"
          >
            <span>
              <i className="fab fa-facebook-f" /> Sign in with Facebook
            </span>{" "}
          </button>
          <button
            onClick={handleLoginGoogle}
            className="btn google-btn social-btn"
            type="button"
          >
            <span>
              <i className="fab fa-google-plus-g" /> Sign in with Google+
            </span>{" "}
          </button>
        </div>

        <Link to="/resert-password" id="forgot_pswd">
          Forgot password?
        </Link>
        <hr />
        {/* <p>Don't have an account!</p>  */}
        <Link
          to="/register"
          className="btn btn-primary btn-block"
          type="button"
          id="btn-signup"
        >
          <i className="fas fa-user-plus" /> Sign up New Account
        </Link>
      </form>

      <br />
    </div>
  );
}
