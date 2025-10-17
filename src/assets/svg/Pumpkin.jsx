const Pumpkin = ({ className }) => {
  return (
    <svg
      className={className}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem */}
      <path
        d="M23 5 C23 5, 25 2, 27 5"
        stroke="#2D5016"
        strokeWidth="3"
        fill="none"
      />
      {/* Pumpkin body */}
      <ellipse cx="25" cy="28" rx="18" ry="16" fill="#FF6B00" />
      {/* Left eye */}
      <polygon
        points="17,22 20,22 19,26"
        fill="#1a0a2e"
      />
      {/* Right eye */}
      <polygon
        points="30,22 33,22 32,26"
        fill="#1a0a2e"
      />
      {/* Nose */}
      <polygon
        points="24,28 26,28 25,31"
        fill="#1a0a2e"
      />
      {/* Mouth */}
      <path
        d="M16 32 Q18 36 20 34 Q22 32 24 34 Q26 36 28 34 Q30 32 32 34 Q34 36 34 32"
        stroke="#1a0a2e"
        strokeWidth="2"
        fill="none"
      />
      {/* Ridges */}
      <path
        d="M25 12 Q25 12 25 44"
        stroke="#FF4500"
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M18 15 Q18 15 15 42"
        stroke="#FF4500"
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M32 15 Q32 15 35 42"
        stroke="#FF4500"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
};

export default Pumpkin;
