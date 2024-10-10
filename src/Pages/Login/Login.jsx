import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useLogin } from "./Login.hook";
import Loader from "../../utils/Loader/Loader";

export default function Login() {
  const {
    user,
    onChangeUser,
    onLoginSubmit,
    showPassword,
    togglePasswordVisibility,
    loading,
    error,
  } = useLogin();

  return (
    <section id="login-section">
      <div className="login-container">
        <div className="login-image">
          <img src="/images/loginimage.jpg" alt="" />
        </div>

        <div className="login-form">
          <h1>Hello Again !</h1>
          <p>Welcome back you've been missed</p>
          <div className="login-input-div">
            <input
              value={user?.email}
              onChange={onChangeUser}
              placeholder="Enter Username"
              type="text"
              name="email"
            />
          </div>
          <div className="login-input-div password-div">
            <input
              value={user?.password}
              onChange={onChangeUser}
              placeholder="Enter Password"
              type={`${!showPassword ? "password" : "text"}`}
              name="password"
            />
            <button onClick={togglePasswordVisibility} className="eye">
              {showPassword ? (
                <FaRegEyeSlash size={18} />
              ) : (
                <FaRegEye size={18} />
              )}
            </button>
          </div>
          <div className="link-with-error">
            <Link className="forgot-password">Forgot Password ?</Link>
            {error && <p>{error}</p>}
          </div>
          <div className="login-input-div">
            <button onClick={onLoginSubmit} className="login-btn">
              {loading ? <Loader /> : " Sign In"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
