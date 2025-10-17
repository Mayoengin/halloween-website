import Pumpkin from "../assets/svg/Pumpkin";
import Bat from "../assets/svg/Bat";
import Ghost from "../assets/svg/Ghost";
import Skull from "../assets/svg/Skull";

const HalloweenDecorations = () => {
  return (
    <>
      {/* Floating Bats */}
      <div className="fixed top-10 left-10 animate-float opacity-60 pointer-events-none z-50">
        <Bat className="animate-pulse-glow" />
      </div>
      <div className="fixed top-20 right-20 animate-float opacity-60 pointer-events-none z-50" style={{ animationDelay: "1s" }}>
        <Bat className="animate-pulse-glow" />
      </div>
      <div className="fixed top-40 left-1/4 animate-float opacity-60 pointer-events-none z-50" style={{ animationDelay: "2s" }}>
        <Bat className="animate-pulse-glow" />
      </div>

      {/* Floating Ghosts */}
      <div className="fixed top-1/3 right-10 animate-float opacity-70 pointer-events-none z-50" style={{ animationDelay: "0.5s" }}>
        <Ghost className="animate-flicker" />
      </div>
      <div className="fixed bottom-1/4 left-10 animate-float opacity-70 pointer-events-none z-50" style={{ animationDelay: "1.5s" }}>
        <Ghost className="animate-flicker" />
      </div>

      {/* Pumpkins in corners */}
      <div className="fixed bottom-10 left-10 opacity-80 pointer-events-none z-50">
        <Pumpkin className="animate-pulse-glow" />
      </div>
      <div className="fixed bottom-10 right-10 opacity-80 pointer-events-none z-50">
        <Pumpkin className="animate-pulse-glow" />
      </div>

      {/* Floating Skulls */}
      <div className="fixed top-1/2 left-1/3 animate-float opacity-60 pointer-events-none z-50" style={{ animationDelay: "2.5s" }}>
        <Skull className="animate-spooky-shake" />
      </div>
      <div className="fixed bottom-1/3 right-1/4 animate-float opacity-60 pointer-events-none z-50" style={{ animationDelay: "1.8s" }}>
        <Skull className="animate-spooky-shake" />
      </div>
    </>
  );
};

export default HalloweenDecorations;
