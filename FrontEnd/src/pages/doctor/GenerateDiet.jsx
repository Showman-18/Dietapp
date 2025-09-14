import React from "react";

export default function DoctorGenerateDiet() {
  return (
    <div>
      <h3>Generate Diet Plan</h3>
      <div className="card" style={{ maxWidth: 560 }}>
        <form>
          <label style={{ color: "var(--primary-green)", fontWeight: 600 }}>Age</label>
          <input className="input-rounded" type="number" name="age" style={{ width: "100%" }} />
          <label style={{ color: "var(--primary-green)", fontWeight: 600 }}>Gender</label>
          <input className="input-rounded" type="text" name="gender" style={{ width: "100%" }} />
          <label style={{ color: "var(--primary-green)", fontWeight: 600 }}>Veg/Non-Veg</label>
          <input className="input-rounded" type="text" name="dietType" style={{ width: "100%" }} />
          <label style={{ color: "var(--primary-green)", fontWeight: 600 }}>Meal Frequency</label>
          <input className="input-rounded" type="number" name="mealFrequency" style={{ width: "100%" }} />
          <button className="btn-primary" type="button" style={{ marginTop: 8 }}>Generate</button>
        </form>
      </div>
    </div>
  );
}
