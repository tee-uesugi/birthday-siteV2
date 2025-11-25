import confetti from "canvas-confetti";

export default function fireConfetti() {
  confetti({
    particleCount: 200,
    spread: 80,
    origin: { y: 0.6 },
  });
}
