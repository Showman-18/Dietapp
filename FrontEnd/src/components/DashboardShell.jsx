import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../components/Logo";

export default function DashboardShell({ role = "patient" }) {
  const isPatient = role === "patient";
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "1rem" }}>
      <header className="card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Logo size={36} />
          <div>
            <h2 style={{ margin: 0 }}>{isPatient ? "Patient Dashboard" : "Doctor Dashboard"}</h2>
            <p style={{ margin: 0, color: "var(--muted-gray)" }}>Holistic care, powered by Ayurveda and the cloud.</p>
          </div>
        </div>
        <nav style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {isPatient ? (
            <>
              <Link to="diet" className="btn-primary">Diet Plan</Link>
              <Link to="progress" className="btn-primary" style={{ background: "var(--primary-green-hover)" }}>Progress</Link>
              <Link to="profile" className="btn-primary" style={{ background: "var(--primary-green)" }}>Profile</Link>
            </>
          ) : (
            <>
              <Link to="patients" className="btn-primary">Patient List</Link>
              <Link to="generate" className="btn-primary" style={{ background: "var(--primary-green-hover)" }}>Generate Diet</Link>
              <Link to="records" className="btn-primary" style={{ background: "var(--primary-green)" }}>Patient Records</Link>
            </>
          )}
        </nav>
      </header>
      <main style={{ marginTop: 16 }}>
        <Outlet />
      </main>
    </div>
  );
}
