import React from "react";

// Ayurveda-inspired logo: leaf + digital pixel + circle (lotus/mortar)
export default function Logo({ size = 56, style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      {/* Main circle (mortar/lotus base) */}
      <circle cx="28" cy="28" r="26" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="2" />
      {/* Leaf (Ayurveda) */}
      <path
        d="M28 40C36 32 36 18 28 12C20 18 20 32 28 40Z"
        fill="#2E7D32"
        stroke="#4CAF50"
        strokeWidth="2"
      />
      {/* Digital pixel (tech) */}
      <rect x="36" y="16" width="6" height="6" rx="2" fill="#FFB300" />
      {/* Accent dot (spiritual) */}
      <circle cx="44" cy="28" r="2.5" fill="#AB47BC" />
    </svg>
  );
}
