import React, { useState } from "react";

export default function Register({ setPage, addUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    if (!email || !password) return alert("Fill all fields!");
    addUser({ email, password });
    alert("Account Created!");
    setPage("login");
  };

  return (
    <div className="auth-wrapper">
      <img
        className="auth-logo"
        src="https://cdn-icons-png.flaticon.com/512/8338/8338582.png"
        alt="logo"
      />
      <h1 className="brand-title">MATHYMATHY</h1>

      <div className="auth-card">
        <h2 className="auth-header">Create Account</h2>

        <label>Enter Email</label>
        <input
          className="auth-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Create Password</label>
        <input
          className="auth-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-button" onClick={registerUser}>
          Sign Up
        </button>

        <p className="link" onClick={() => setPage("login")}>
          Back to Login
        </p>
      </div>
    </div>
  );
}
