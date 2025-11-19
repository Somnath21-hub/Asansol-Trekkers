import React, { useEffect, useState } from "react";

const MAX_COUNT = 100;

const Loader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < MAX_COUNT) {
      const interval = setInterval(() => setCount((c) => c + 1), 25);
      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white 
      bg-gradient-to-br from-[#003366] via-[#004d40] to-[#009688] animate-gradient">
      
      {/* Rotating Mountain Icon */}
      <div className="animate-spin-slow mb-6">
        <svg width="120" height="120" viewBox="0 0 64 64" fill="none">
          <circle cx="48" cy="18" r="7" fill="#ffeb3b" />
          <path
            d="M8 60 L24 32 L40 58 L52 45 L60 60 Z"
            fill="#4ade80"
            stroke="#166534"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M24 32 L32 20 L40 32"
            stroke="#1e3a8a"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Percentage */}
      <div className="text-6xl font-extrabold mb-3 animate-bounce-slow drop-shadow-2xl">
        {count}%
      </div>

      {/* Fancy Progress Bar */}
      <div className="w-72 h-3 rounded-full bg-white/30 overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-yellow-300 to-green-400 animate-progress"
          style={{ width: `${count}%` }}
        ></div>
      </div>

      <p className="text-lg font-semibold tracking-wide opacity-90">
        Loading Asansol Trekkers Adventures...
      </p>
    </div>
  );
};

export default Loader;
