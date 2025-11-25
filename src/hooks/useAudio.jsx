import { useRef, useEffect } from "react";

export default function useAudio(src, autoPlay = false) {
  const audioRef = useRef(new Audio(src));

  // auto-play ถ้าเปิด autoPlay
  useEffect(() => {
    if (autoPlay) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          // ignore AbortError
          if (err.name !== "AbortError") {
            console.error(err);
          }
        });
      }
    }

    return () => {
      // หยุดเพลงเมื่อ component unmount
      audioRef.current.pause();
    };
  }, [src, autoPlay]);

  // ฟังก์ชันควบคุมเพลง
  const play = () => {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      });
    }
  };

  const pause = () => {
    audioRef.current.pause();
  };

  return { audioRef, play, pause };
}
