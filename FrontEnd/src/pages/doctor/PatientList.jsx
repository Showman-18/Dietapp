import React from "react";

const patients = [
  { name: "Amit Kumar", age: 34, gender: "Male", diet: "Veg", status: "Active" },
  { name: "Priya Singh", age: 29, gender: "Female", diet: "Non-Veg", status: "Follow-up" },
  { name: "Rahul Verma", age: 41, gender: "Male", diet: "Veg", status: "New" },
];

export default function DoctorPatientList() {
  return (
    <div>
      <h3>Patients</h3>
      <div className="card" style={{ overflowX: "auto" }}>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Diet</th>
              <th>Status</th>
              <th>Quick View</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.name}>
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.gender}</td>
                <td>{p.diet}</td>
                <td>{p.status}</td>
                <td><button className="btn-primary" style={{ padding: "0.4rem 0.8rem" }}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
