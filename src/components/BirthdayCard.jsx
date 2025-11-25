import React, { useState } from "react";

export default function BirthdayCard() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ perspective: "1000px" }} onClick={() => setOpen(!open)}>
      <div
        style={{
          width: 250,
          height: 180,
          position: "relative",
          transformStyle: "preserve-3d",
          transform: open ? "rotateY(-180deg)" : "none",
          transition: "0.6s",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            background: "#ffb6c1",
            color: "white",
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Click to Open 🎁
        </div>

        <div
          style={{
            background: "#fff",
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: 12,
            transform: "rotateY(180deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            fontSize: "1.2rem",
          }}
        >
          Happy Birthday Momay 🎉💗
        </div>
      </div>
    </div>
  );
}
