import React from "react";

export default function PatientDietPlan() {
  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const samplePlan = [
    { meal: "Early Morning", item: "Warm water with lemon and honey" },
    { meal: "Breakfast", item: "Moong dal chilla with mint chutney" },
    { meal: "Mid-Morning", item: "Seasonal fruit (Apple/Papaya)" },
    { meal: "Lunch", item: "Khichdi with ghee, cucumber salad" },
    { meal: "Evening", item: "Herbal tea (Tulsi/Ginger)" },
    { meal: "Dinner", item: "Vegetable stew with rice" },
  ];
  return (
    <div>
      <h3>This Week's Ayurveda Diet Plan</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
        {days.map((d, idx) => (
          <div className="card" key={d}>
            <h4 style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              {d} <span style={{ color: "var(--golden)", fontSize: 12 }}>Day {idx + 1}</span>
            </h4>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              {samplePlan.map((p) => (
                <li key={p.meal} style={{ marginBottom: 6 }}>
                  <strong>{p.meal}:</strong> <span style={{ color: "var(--muted-gray)" }}>{p.item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
