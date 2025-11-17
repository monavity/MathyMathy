import React, { useState } from "react";
import "./index.css";
import Login from "./components/Login";
import Register from "./components/Register";
import ScanPage from "./components/ScanPage";
import ForgotPassword from "./components/ForgotPassword";

export default function App() {
  const [page, setPage] = useState("login");
  const [users, setUsers] = useState([]);

  const addUser = (user) => setUsers([...users, user]);

  const updatePassword = (email, newPass) => {
    const updated = users.map((u) =>
      u.email === email ? { ...u, password: newPass } : u
    );
    setUsers(updated);
  };

  return (
    <div className="app-container">
      {page === "login" && <Login setPage={setPage} users={users} />}
      {page === "register" && <Register setPage={setPage} addUser={addUser} />}
      {page === "forgot" && (
        <ForgotPassword setPage={setPage} updatePassword={updatePassword} />
      )}
      {page === "scan" && <ScanPage setPage={setPage} />}
    </div>
  );
}
