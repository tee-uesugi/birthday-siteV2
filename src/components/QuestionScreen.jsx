import React, { useState } from "react";
import "../App.css";

export default function QuestionScreen({ onCorrect }) {
  const [mindPos, setMindPos] = useState({ top: "50%", left: "30%" });

  const handleHover = () => {
    // random top / left ระหว่าง 10%–80% ของหน้าจอ
    const top = 10 + Math.random() * 70;
    const left = 10 + Math.random() * 70;
    setMindPos({ top: `${top}%`, left: `${left}%` });
  };

  const handleClick = (choice) => {
    if (choice === "momay") {
      onCorrect();
    } else {
      handleHover(); // ปุ่ม Mind หลบเมื่อกดผิด
    }
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        background: "linear-gradient(to bottom, #fff9fc, #ffeaf7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >   

      <div className="loveText"><h1 
        style={{
          fontSize: "2.0rem",
          marginBottom: "50px",
          fontWeight: 600,
        }}
      >
        ใครน่ารักที่สุดในโลก?
      </h1></div>

      <div style={{ position: "relative", width: "100%", height: "250px" }}>
        {/* ปุ่ม Mind */}
        <button
          onMouseEnter={handleHover}
          onClick={() => handleClick("mind")}
          style={{
            position: "absolute",
            top: mindPos.top,
            left: mindPos.left,
            transform: "translate(-50%, -50%)",
            padding: "14px 32px",
            fontSize: "1.3rem",
            fontWeight: 600,
            background: "linear-gradient(135deg, #ff9bb0, #ffb6c9)",
            color: "#fff",
            borderRadius: 16,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(255,140,180,0.3)",
            transition: "all 0.25s ease",
          }}
        >
          Mind
        </button>

        {/* ปุ่ม Momay */}
        <button
          onClick={() => handleClick("momay")}
          style={{
            position: "absolute",
            top: "50%",
            left: "70%",
            transform: "translate(-50%, -50%)",
            padding: "14px 32px",
            fontSize: "1.3rem",
            fontWeight: 600,
            background: "linear-gradient(135deg, #ffb6c9, #ffc1d6)",
            color: "#fff",
            borderRadius: 16,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(255,140,180,0.3)",
            transition: "all 0.25s ease",
          }}
        >
          Momay
        </button>
      </div>
    </div>
  );
}
