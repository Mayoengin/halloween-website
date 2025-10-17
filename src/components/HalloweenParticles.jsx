import { useEffect, useState } from "react";

const HalloweenParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random floating particles
    const particleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: ["🦇", "👻", "🎃", "💀", "🕷️", "🕸️"][Math.floor(Math.random() * 6)],
      left: Math.random() * 100,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 10,
      size: 20 + Math.random() * 20,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute opacity-30"
          style={{
            left: `${particle.left}%`,
            fontSize: `${particle.size}px`,
            animation: `floatUp ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.emoji}
        </div>
      ))}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default HalloweenParticles;
