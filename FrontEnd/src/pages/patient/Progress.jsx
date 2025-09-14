import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";

const data = [
  { week: "W1", weight: 72, bmi: 25.4, adherence: 80 },
  { week: "W2", weight: 71.5, bmi: 25.2, adherence: 82 },
  { week: "W3", weight: 71, bmi: 25.0, adherence: 85 },
  { week: "W4", weight: 70.4, bmi: 24.8, adherence: 88 },
  { week: "W5", weight: 70.2, bmi: 24.7, adherence: 90 },
];

export default function PatientProgress() {
  return (
    <div>
      <h3>Progress Overview</h3>
      <div className="card" style={{ height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#A5D6A7" />
            <XAxis dataKey="week" stroke="#8D6E63" />
            <YAxis stroke="#8D6E63" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="weight" stroke="#FF7043" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="bmi" stroke="#29B6F6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="card" style={{ height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#A5D6A7" />
            <XAxis dataKey="week" stroke="#8D6E63" />
            <YAxis stroke="#8D6E63" />
            <Tooltip />
            <Legend />
            <Bar dataKey="adherence" fill="#AB47BC" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
