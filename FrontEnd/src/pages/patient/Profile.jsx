import React from "react";

const visits = [
  { date: "2025-06-01", doctor: "Dr. Meera Sharma", treatment: "Digestive Agni Balancing", notes: "Improved appetite" },
  { date: "2025-07-15", doctor: "Dr. Arjun Rao", treatment: "Vata pacifying diet", notes: "Better sleep" },
  { date: "2025-08-20", doctor: "Dr. Kavya Nair", treatment: "Pitta balancing plan", notes: "Reduced acidity" },
];

export default function PatientProfile() {
  return (
    <div>
      <h3>History of Doctors & Treatments</h3>
      <div className="card" style={{ overflowX: "auto" }}>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Doctor</th>
              <th>Treatment</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((v) => (
              <tr key={v.date + v.doctor}>
                <td>{v.date}</td>
                <td>{v.doctor}</td>
                <td>{v.treatment}</td>
                <td>{v.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
