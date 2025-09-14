import React, { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("patient");
  return (
    <div style={{ maxWidth: 380, margin: "3rem auto", background: "var(--white)", borderRadius: "var(--border-radius)", boxShadow: "var(--shadow)", padding: 32 }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Login</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 24 }}>
        <button className={`tab${role === "patient" ? " active" : ""}`} onClick={() => setRole("patient")}>Patient</button>
        <button className={`tab${role === "doctor" ? " active" : ""}`} onClick={() => setRole("doctor")}>Doctor</button>
      </div>
      <form>
        <label style={{ color: "var(--primary-green)", fontWeight: 600 }}>Email</label>
        <input className="input-rounded" type="email" name="email" required style={{ width: "100%" }} />
        <label style={{ color: "var(--primary-green)", fontWeight: 600 }}>Password</label>
        <input className="input-rounded" type="password" name="password" required style={{ width: "100%" }} />
        <button className="btn-primary" type="submit" style={{ width: "100%", marginTop: 16 }}>
          Login as {role.charAt(0).toUpperCase() + role.slice(1)}
        </button>
      </form>
    </div>
  );
}
