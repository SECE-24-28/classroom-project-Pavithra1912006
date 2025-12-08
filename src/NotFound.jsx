import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f5f5f5"
    }}>
      <h1 style={{ fontSize: "120px", margin: "0", color: "#ff2347" }}>404</h1>
      <h2 style={{ fontSize: "32px", margin: "20px 0", color: "#333" }}>Page Not Found</h2>
      <p style={{ fontSize: "18px", color: "#666", marginBottom: "30px" }}>
        The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "15px 40px",
          fontSize: "18px",
          background: "#ff2347",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600"
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default NotFound;
