import React from "react";
import "./../index.css";

export default function ScanPage({ setPage }) {
  return (
    <div className="scan-wrapper">
      <header className="scan-header">
        <img className="scan-icon" src="https://i.imgur.com/eNp8LNB.png" alt="logo" />
        <h1 className="scan-title">Scan Problem</h1>
        <img className="scan-icon" src="https://i.imgur.com/eNp8LNB.png" alt="logo" />
      </header>

      <div className="scan-box">
        <img
          className="camera-icon"
          src="https://i.imgur.com/Ne91kCG.png"
          alt="camera"
        />
        <p className="scan-text-main">Point Camera at Math Problem</p>
        <p className="scan-text-sub">or upload an image</p>
      </div>

      <div className="scan-btn-container">
        <button className="scan-btn scan-primary">
          📷 Scan Image
        </button>

        <button className="scan-btn scan-upload">
          ⬆️ Upload Image
        </button>

        <button className="scan-btn scan-manual">
          Manual Input
        </button>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item">📷 Scan</div>
        <div className="nav-item">🔁 History</div>
        <div className="nav-item">🧮 Scientific</div>
        <div className="nav-item">📋 Practice</div>
        <div className="nav-item">⚙️ Settings</div>
      </nav>
    </div>
  );
}
