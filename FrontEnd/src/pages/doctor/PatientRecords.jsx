import React from "react";

const records = [
  { id: 1, name: "Amit Kumar", lastVisit: "2025-08-22", notes: "Improved digestion, continue plan" },
  { id: 2, name: "Priya Singh", lastVisit: "2025-08-28", notes: "Moderate adherence, reinforce breakfast" },
  { id: 3, name: "Rahul Verma", lastVisit: "2025-09-02", notes: "Start Pitta balancing diet" },
];

export default function DoctorPatientRecords() {
  return (
    <div>
      <h3>Patient Records</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
        {records.map((r) => (
          <div className="card" key={r.id}>
            <h4 style={{ marginTop: 0 }}>{r.name}</h4>
            <p style={{ color: "var(--muted-gray)", margin: "8px 0" }}>Last Visit: {r.lastVisit}</p>
            <p style={{ margin: 0 }}>{r.notes}</p>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              <button className="btn-primary" style={{ padding: "0.45rem 0.9rem" }}>Open</button>
              <button className="btn-primary" style={{ background: "var(--primary-green-hover)", padding: "0.45rem 0.9rem" }}>Message</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
