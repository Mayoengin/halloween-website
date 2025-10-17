const Skull = ({ className }) => {
  return (
    <svg
      className={className}
      width="40"
      height="50"
      viewBox="0 0 40 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Skull head */}
      <ellipse cx="20" cy="18" rx="12" ry="14" fill="white" />
      {/* Left eye socket */}
      <ellipse cx="15" cy="16" rx="3" ry="4" fill="#1a0a2e" />
      {/* Right eye socket */}
      <ellipse cx="25" cy="16" rx="3" ry="4" fill="#1a0a2e" />
      {/* Nose hole */}
      <path
        d="M18 22 L20 26 L22 22 Z"
        fill="#1a0a2e"
      />
      {/* Jaw */}
      <rect x="13" y="30" width="14" height="8" rx="2" fill="white" />
      {/* Teeth */}
      <line x1="15" y1="30" x2="15" y2="35" stroke="#1a0a2e" strokeWidth="1" />
      <line x1="18" y1="30" x2="18" y2="35" stroke="#1a0a2e" strokeWidth="1" />
      <line x1="22" y1="30" x2="22" y2="35" stroke="#1a0a2e" strokeWidth="1" />
      <line x1="25" y1="30" x2="25" y2="35" stroke="#1a0a2e" strokeWidth="1" />
      {/* Outline */}
      <ellipse cx="20" cy="18" rx="12" ry="14" fill="none" stroke="#8B00FF" strokeWidth="1" />
    </svg>
  );
};

export default Skull;
