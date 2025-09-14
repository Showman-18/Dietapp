import React, { useState } from "react";

const patientFields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Email/Phone", name: "email", type: "text" },
  { label: "Age", name: "age", type: "number" },
  { label: "Gender", name: "gender", type: "text" },
  { label: "Weight (kg)", name: "weight", type: "number" },
  { label: "Height (cm)", name: "height", type: "number" },
  { label: "Veg/Non-Veg", name: "dietType", type: "text" },
  { label: "Allergies", name: "allergies", type: "text" },
  { label: "Meal Frequency", name: "mealFrequency", type: "number" },
  { label: "Prakriti", name: "prakriti", type: "text" },
  { label: "Verification Code", name: "verificationCode", type: "text" },
];

const doctorFields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Email/Phone", name: "email", type: "text" },
  { label: "Age", name: "age", type: "number" },
  { label: "Gender", name: "gender", type: "text" },
  { label: "Qualification", name: "qualification", type: "text" },
  { label: "Clinic/Hospital Address", name: "address", type: "text" },
  { label: "Verification Code", name: "verificationCode", type: "text" },
];

export default function SignUp() {
  const [tab, setTab] = useState("patient");
  const fields = tab === "patient" ? patientFields : doctorFields;
  return (
    <div style={{ maxWidth: 420, margin: "3rem auto", background: "var(--white)", borderRadius: "var(--border-radius)", boxShadow: "var(--shadow)", padding: 32 }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
        <button className={`tab${tab === "patient" ? " active" : ""}`} onClick={() => setTab("patient")}>Patient</button>
        <button className={`tab${tab === "doctor" ? " active" : ""}`} onClick={() => setTab("doctor")}>Doctor</button>
      </div>
      <form>
        {fields.map((f) => (
          <div key={f.name}>
            <label style={{ color: "var(--primary-green)", fontWeight: 600 }}>{f.label}</label>
            <input className="input-rounded" type={f.type} name={f.name} required style={{ width: "100%" }} />
          </div>
        ))}
        <button className="btn-primary" type="submit" style={{ width: "100%", marginTop: 16 }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
