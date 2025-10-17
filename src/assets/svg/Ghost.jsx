const Ghost = ({ className }) => {
  return (
    <svg
      className={className}
      width="40"
      height="50"
      viewBox="0 0 40 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ghost body */}
      <path
        d="M20 5 C10 5, 5 10, 5 20 L5 45 L10 40 L15 45 L20 40 L25 45 L30 40 L35 45 L35 20 C35 10, 30 5, 20 5"
        fill="white"
        opacity="0.9"
        stroke="#8B00FF"
        strokeWidth="1"
      />
      {/* Left eye */}
      <circle cx="15" cy="18" r="3" fill="#1a0a2e" />
      {/* Right eye */}
      <circle cx="25" cy="18" r="3" fill="#1a0a2e" />
      {/* Mouth */}
      <ellipse cx="20" cy="28" rx="4" ry="3" fill="#1a0a2e" />
      {/* Glow effect */}
      <circle cx="20" cy="25" r="18" fill="white" opacity="0.1" />
    </svg>
  );
};

export default Ghost;
