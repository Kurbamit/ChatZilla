import "../styles/style.css";
import { useLoginForm } from "../scripts/loginUtils/LogInUtils";
import io from "socket.io-client";
import React, { useEffect } from "react";

function Login() {
  useEffect(() => {
    // Connect to the WebSocket server
    const socket = io("http://localhost:3001", {
      transports: ["websocket"],
    });

    // Example: Send a message to the server
    socket.emit("chat message", "Hello, server!");

    // Example: Receive a message from the server
    socket.on("chat message", (msg) => {
      console.log(`Received message from server: ${msg}`);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const { loginInfo, emailValidation, handleInputChange, handleLogIn } =
    useLoginForm();

  return (
    <>
      <div className="login-box">
        <h2>LOGIN</h2>
        <form>
          <div className="input-field">
            <input
              type="text"
              name="email"
              value={loginInfo.email}
              onChange={handleInputChange}
              style={{
                borderBottom: `1px solid ${
                  emailValidation.isValid ? "green" : "red"
                }`,
                color: emailValidation.isValid ? "green" : "red",
              }}
              required
            ></input>
            <label>Email</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              name="password"
              value={loginInfo.password}
              onChange={handleInputChange}
              style={{
                borderBottom: "1px solid black", // Customize the styling for the password field
              }}
              required
            ></input>
            <label>Password</label>
          </div>
          <button className="btn mt-4" onClick={handleLogIn}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Log in
          </button>
          <a href="/Signup" className="btn mt-4">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign up
          </a>
          <p className="mb-0 mt-4 text-center">
            <a href="#0" className="link">
              Forgot your password?
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;