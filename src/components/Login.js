import React, { useState } from "react";

export default function Login({ setPage, users }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = () => {
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    setPage("scan");  // 🔥 Redirect to Scan Page
  } else {
    alert("Incorrect email or password!");
  }
};


  return (
    <div className="auth-wrapper">
      <img
        className="auth-logo"
        src="https://i.imgur.com/xxPRaui.png"
        alt="logo"
      />
      <h1 className="brand-title">MATHYMATHY</h1>

      <div className="auth-card">
        <h2 className="auth-header">Sign in</h2>

        <label>Email</label>
        <input
          className="auth-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          className="auth-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-button" onClick={handleLogin}>
          Sign In
        </button>

        <p className="link" onClick={() => setPage("register")}>
          Create an Account
        </p>
        <p className="link forgot" onClick={() => setPage("forgot")}>
          Forgot Password?
        </p>
      </div>
    </div>
  );
}
