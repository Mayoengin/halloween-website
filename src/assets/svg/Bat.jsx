const Bat = ({ className }) => {
  return (
    <svg
      className={className}
      width="60"
      height="40"
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left wing */}
      <path
        d="M5 25 Q2 15, 8 10 Q12 8, 15 12 Q18 15, 20 18 L25 20"
        fill="#1a0a2e"
        stroke="#8B00FF"
        strokeWidth="0.5"
      />
      {/* Right wing */}
      <path
        d="M55 25 Q58 15, 52 10 Q48 8, 45 12 Q42 15, 40 18 L35 20"
        fill="#1a0a2e"
        stroke="#8B00FF"
        strokeWidth="0.5"
      />
      {/* Body */}
      <ellipse
        cx="30"
        cy="22"
        rx="5"
        ry="7"
        fill="#1a0a2e"
      />
      {/* Head */}
      <circle
        cx="30"
        cy="16"
        r="4"
        fill="#1a0a2e"
      />
      {/* Left ear */}
      <path
        d="M27 13 L26 10 L28 13"
        fill="#1a0a2e"
      />
      {/* Right ear */}
      <path
        d="M33 13 L34 10 L32 13"
        fill="#1a0a2e"
      />
      {/* Eyes */}
      <circle cx="28" cy="16" r="1" fill="#FF6B00" />
      <circle cx="32" cy="16" r="1" fill="#FF6B00" />
    </svg>
  );
};

export default Bat;
