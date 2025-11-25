import React, { useEffect } from "react";

export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        background: "#ffeaf4",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "1.5rem",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "#ff8fb0",
          animation: "loadingBounce 0.6s infinite",
        }}
      ></div>

      <p style={{ marginTop: 20 }}>Loading...</p>

      <style>
        {`
        @keyframes loadingBounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}
      </style>
    </div>
  );
}
