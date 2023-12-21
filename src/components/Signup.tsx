import React, { useRef, useState } from "react";
import {
  handleEmailChange,
  handleFormSubmit,
  handleUsernameChange,
} from "../scripts/SignupValidation";
import "../styles/style.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const inputFieldDivRefEmail = useRef<HTMLDivElement>(null);
  const inputFieldDivRefUsername = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="sign-up-box">
        <h2>SIGN-UP</h2>
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <div ref={inputFieldDivRefEmail} className="input-field">
            <input
              id="input-email"
              type="text"
              name=""
              value={email}
              onChange={(e) => {
                handleEmailChange(
                  e.target.value,
                  inputFieldDivRefEmail.current
                );
                setEmail(e.target.value);
              }}
              required
            ></input>
            <label id="input-email">Email</label>
            <div id="email-error" className="error-message"></div>
          </div>
          <div ref={inputFieldDivRefUsername} className="input-field">
            <input
              id="input-username"
              type="text"
              name=""
              value={username}
              onChange={(e) => {
                handleUsernameChange(
                  e.target.value,
                  inputFieldDivRefUsername.current
                );
                setUsername(e.target.value);
              }}
              required
            ></input>
            <label id="input-username">Username</label>
            <div id="username-error" className="error-message"></div>
          </div>
          <div className="input-field">
            <input id="input-password" type="password" name="" required></input>
            <label id="input-password">Password</label>
            <div id="password-error" className="error-message"></div>
          </div>
          <div id="password-information">
            <table></table>
          </div>
          <div className="input-field">
            <input
              id="input-password-repeat"
              type="password"
              name=""
              required
            ></input>
            <label id="input-password-repeat-label">Repeat Password</label>
            <div id="repeat-password-error" className="error-message"></div>
          </div>
          <div className="create-acc-btn">
            <button
              type="submit"
              className="btn mt-4"
              id="create-account-button"
            >
              Create account
            </button>
          </div>
          <p className="mv-0 mt-4 text-center">
            <a href="/" className="link">
              Already have an account?
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;
