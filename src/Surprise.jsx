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
  { length: 6 },
  (_, i) => `/assets/images/${i + 1}.jpg`
);

function Surprise() {
  const [showPopup, setShowPopup] = useState(false);
  const audioRef = useRef(null);

  const message = `สุขสันต์วันเกิดนะ\nขอให้ปีนี้เป็นปีที่ดีของเธอ\nขอให้มีแต่รอยยิ้ม มีแต่พลังบวกนะ\nผมจะอยู่ข้างๆแบบนี้ตลอดไปนะ \nยินดีที่ได้รู้จักนะ ❤️`;

  const fireConfetti = () => {
    const defaults = {
      spread: 120,
      startVelocity: 50,
      gravity: 0.7,
      scalar: 1.2,
      ticks: 150,
      origin: { y: 0.7 },
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 50,
        colors: ["#ff6b6b", "#feca57", "#48dbfb", "#1dd1a1"],
      });
      confetti({ ...defaults, particleCount: 30, scalar: 1.6 });
      confetti({
        ...defaults,
        particleCount: 20,
        scalar: 2,
        shapes: ["circle"],
      });
    }

    shoot();
    setTimeout(shoot, 1000);
    setTimeout(shoot, 600);
  };

  const handleClick = () => {
    // confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
    fireConfetti();
    audioRef.current?.play();
    setShowPopup(true);
  };

  return (
    <div
      className="surprise-page"
      style={{
        backgroundImage: "url('/assets/images/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="background-image">
        <div className="loveText-container">
          <h1>🎂 สุขสันต์วันเกิดนะ 🎉</h1>
        </div>
        {/* <div className="card" onClick={() => document.getElementById('cardInner').classList.toggle('flip')}>
        <div className="inner-card " id="cardInner">
          <div className="face front"><h3>กดเพื่อเปิดการ์ด 💌</h3></div>
          <div className="face back"><h3>รักเธอที่สุดเลยนะ 💖</h3></div>
        </div>
      </div> */}
        <div className="section">
          <h2>💌 ข้อความถึงคนเท่</h2>
          <div className="loveText">
            <Typewriter words={[message]} loop={10} cursor typeSpeed={80} />
          </div>
        </div>

        <div className="section">
          <button className="confetti-button" onClick={handleClick}>
            กดสิ! มีอะไรจะให้ 💝
          </button>
          <audio ref={audioRef} src="/assets/music/song.mp3" />
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

        {showPopup && (
          <div className="popup-modal" onClick={() => setShowPopup(false)}>
            <div className="popup-content">
              <img src="/assets/images/white-red-flowers.jpg" alt="ช่อดอกไม้" />

              {/* เพิ่มข้อความ Typewriter ใต้รูป */}
              <div className="popup-message">
                <Typewriter
                  words={["ยินดีที่ได้รู้จักนะครับ"]}
                  loop={1}
                  cursor 
                  typeSpeed={100}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Surprise;
