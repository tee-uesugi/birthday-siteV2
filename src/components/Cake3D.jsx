import React from "react";

export default function Cake3D() {
  return (
    <div
      style={{
        fontSize: "6rem",
        animation: "cakePop 1.2s ease forwards",
        marginBottom: 20,
      }}
    >
      🎂
      <style>
        {`
        @keyframes cakePop {
          0% { transform: scale(0.2) rotateY(0); opacity: 0; }
          100% { transform: scale(1) rotateY(360deg); opacity: 1; }
        }
      `}
      </style>
    </div>
  );
}
