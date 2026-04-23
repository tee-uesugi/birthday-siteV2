import React, { useState, useEffect } from "react";
import "./App.css";
import Cake3D from "./components/Cake3D";
import fireConfetti from "./components/ConfettiEffect";
import { Typewriter } from "react-simple-typewriter";
import birthdayPersonImg from "./assets/images/momay.png"; // รูปเจ้าของวันเกิด
import flowerImg from "./assets/images/c.png"; // รูป popup
import useAudio from "./hooks/useAudio";
import backgroundSong from "./assets/music/HBD2.mp3";
import popupSong from "./assets/music/song1.mp3";
import bgImage from "./assets/images/background.jpg";


export default function Surprise() {
  const [showPopup, setShowPopup] = useState(false);

  // เพลง background หน้า Surprise
  const { play: playBG, pause: pauseBG } = useAudio(backgroundSong);

  // เพลง popup
  const { play: playPopup } = useAudio(popupSong);

  useEffect(() => {
    fireConfetti();
    playBG(); // เล่นเพลง background ตอนเข้าหน้า
  }, []);

  const handleClickButton = () => {
    pauseBG();     // หยุดเพลง background
    playPopup();   // เล่นเพลง popup
    fireConfetti();
    setShowPopup(true);
  };

  return (
    <div
    style={{
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "40px 20px",
      boxSizing: "border-box",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  
      background: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",
      overflow: "hidden",
    }}
  >
  
      {/* รูปเจ้าของวันเกิด */}
      <div
        style={{
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          overflow: "hidden",
          marginTop: "30px",
          border: "6px solid rgba(255,140,180,0.6)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={birthdayPersonImg}
          alt="Momay"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* เค้ก 3D */}
      <Cake3D />

      {/* ปุ่ม Modern */}
      <button
        onClick={handleClickButton}
        style={{
          marginTop: "30px",
          padding: "16px 48px",
          fontSize: "1.3rem",
          borderRadius: 16,
          background: "linear-gradient(90deg, #ff9bb0, #ffb6c9)",
          color: "#fff",
          border: "none",
          boxShadow: "0 10px 30px rgba(255,140,180,0.3)",
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        กดสิ! มีอะไรจะให้ 💝
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div
          className="popup-modal"
          onClick={() => setShowPopup(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <div
            className="popup-content"
            style={{
              background: "#fff",
              padding: 24,
              borderRadius: 16,
              textAlign: "center",
              maxWidth: "90%",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={flowerImg}
              alt="ช่อดอกไม้"
              style={{ width: "280px", borderRadius: 12, marginBottom: 20 }}
            />

            <div style={{ fontSize: "1.2rem", color: "#333" }}>
              <Typewriter
                words={["ให้คนที่ยิ้มน่ารักที่สุดดดดด"]}
                loop={1}
                cursor
                typeSpeed={100}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
