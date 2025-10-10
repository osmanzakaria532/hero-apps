import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-3 animate-bounce">
        {/* L */}
        <span className="text-3xl font-bold text-gray-500 tracking-widest">
          L
        </span>

        {/* Rotating Logo */}
        <img
          src="/logo.png" // 🔁 তোমার logo path বসাও
          alt="Loading Logo"
          className="w-12 h-12 animate-spin"
        />

        <span className="text-3xl font-bold text-gray-500 tracking-[0.6em]">
          OADING
        </span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
