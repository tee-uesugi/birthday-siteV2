import React, { useRef, useState } from "react";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import confetti from "canvas-confetti";
import { Typewriter } from "react-simple-typewriter";

const images = Array.from(
  { length: 10 },
  (_, i) => `/assets/images/${i + 1}.jpg`
);

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const audioRef = useRef(null);

  const message = `สุขสันต์วันเกิดนะ\nขอให้ปีนี้เป็นปีที่ดีของเธอ\nขอให้มีแต่รอยยิ้ม มีแต่พลังบวกนะ\nเค้าจะอยู่ข้างๆแบบนี้ตลอดไปนะ รักมากนะ ❤️`;

  const handleClick = () => {
    confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
    audioRef.current?.play();
    setShowPopup(true);
  };

  return (
    <div className="App">
      <div className="background-image">
        <h1>🎂 สุขสันต์วันเกิดนะคนดีของเค้า 🎉</h1>
        <div
          className="card"
          onClick={() =>
            document.getElementById("cardInner").classList.toggle("flip")
          }
        >
          <div className="inner-card " id="cardInner">
            <div className="face front">
              <h3>กดเพื่อเปิดการ์ด 💌</h3>
            </div>
            <div className="face back">
              <h3>รักเธอที่สุดเลยนะ 💖</h3>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>📸 รูปที่โครตจะน่ารักกก</h2>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            slidesPerView={3}
            spaceBetween={20}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={4000}
            freeMode={true}
            freeModeMomentum={false}
            breakpoints={{
              768: { slidesPerView: 2 },
              480: { slidesPerView: 1 },
            }}
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img src={src} alt={`รูป ${idx + 1}`} className="slide-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="section">
          <h2>💌 ข้อความถึงเธอ</h2>
          <div className="loveText">
            <Typewriter words={[message]} loop={10} cursor typeSpeed={80} />
          </div>
        </div>

        <div className="section">
          <button className="confetti-button" onClick={handleClick}>
            กดสิ! เค้ามีอะไรจะบอก 💝
          </button>
          <audio ref={audioRef} src="/assets/music/song.mp3" />
        </div>

        {showPopup && (
          <div className="popup-modal" onClick={() => setShowPopup(false)}>
            <div className="popup-content">
              <img src="/assets/images/white-red-flowers.png" alt="ช่อดอกไม้" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
