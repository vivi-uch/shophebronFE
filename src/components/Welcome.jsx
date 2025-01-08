import React from 'react';
import icon from "/Assets/icon.png";

const Welcome = () => {
  return (
    <div className="bg-[#F8F8FF] h-screen relative">
      {/* Logo in Top-Left Corner */}
      <div className="absolute top-4 right-4">
        <img src={icon} alt="Logo" className="w-12 h-12" /> {/* Adjust size as needed */}
      </div>

      {/* Welcome Text */}
      <div className="flex justify-center items-center h-full">
        Welcome to Shop Hebron
      </div>
    </div>
  );
};

export default Welcome;
