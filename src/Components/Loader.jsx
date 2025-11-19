import React, { useEffect, useState } from "react";

const MAX_COUNT = 100; // Loader will count up to 100%

const Loader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < MAX_COUNT) {
      const interval = setInterval(() => setCount((c) => c + 1), 30); // 30ms per increment
      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-200 to-blue-300">
      {/* Sun and Mountain SVG for trekking vibe */}
      <svg
        width="100"
        height="100"
        viewBox="0 0 64 64"
        fill="none"
        className="mb-6"
      >
        <circle
          cx="48"
          cy="18"
          r="7"
          fill="#fde68a"
          className="animate-pulse"
        />
        <path
          d="M8 60 L24 32 L40 58 L52 45 L60 60 Z"
          fill="#34D399"
          stroke="#059669"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M24 32 L32 20 L40 32"
          stroke="#2563EB"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* Loader Counter */}
      <div className="text-4xl font-bold text-blue-900 mb-2 animate-pulse">
        {count}%
      </div>
      <span className="text-lg font-semibold text-green-900">
        Loading Asansol Trekkers adventures...
      </span>
    </div>
  );
};

export default Loader;
