import React, { useState } from "react";

export default function ForgotPassword({ setPage, updatePassword }) {
  const [email, setEmail] = useState("");
  const [newPass, setNewPass] = useState("");

  const resetPass = () => {
    updatePassword(email, newPass);
    alert("Password Updated!");
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
        <h2 className="auth-header">Reset Password</h2>

        <label>Email</label>
        <input
          className="auth-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>New Password</label>
        <input
          className="auth-input"
          type="password"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
        />

        <button className="auth-button" onClick={resetPass}>
          Set Password
        </button>

        <p className="link" onClick={() => setPage("login")}>
          Back to Login
        </p>
      </div>
    </div>
  );
}
