import React from 'react';
import icon from "/Assets/icon.png"; // Logo icon
import grin from "/Images/grin.svg"; // Grin SVG
import star from '/Images/star.svg';
import { Link } from 'react-router-dom'; // Optional, if using React Router for navigation

const Welcome = () => {
  return (
    <div className="bg-[#FFFFFF] h-screen relative">
      {/* Logo in Top-Left Corner */}
      <div className="absolute top-8 right-20">
        <img src={icon} alt="Logo" className="w-16 h-16" />
      </div>

       {/* Star SVG in Top-Right Corner */}
        <div className="absolute top-5 right-5">
            <img src={star} alt="Star Icon" className="w-10 h-10" />
        </div>

        {/* Diagonal Copy of Top-Right Star (Below it) */}
        <div className="absolute top-[calc(5rem+20px)] right-[calc(5rem+20px)]">
            <img src={star} alt="Star Icon" className="w-10 h-10" />
        </div>

        {/* Copy of Star SVG in Bottom-Right Corner */}
        <div className="absolute bottom-5 right-5">
            <img src={star} alt="Star Icon" className="w-10 h-10" />
        </div>

        {/* Diagonal Copy of Bottom-Right Star (Above it) */}
        <div className="absolute bottom-[calc(5rem+20px)] right-[calc(5rem+20px)]">
            <img src={star} alt="Star Icon" className="w-10 h-10" />
        </div>

        {/* Star SVG in Top-Left Corner */}
        <div className="absolute top-5 left-5">
            <img src={star} alt="Star Icon" className="w-10 h-10" />
        </div>

        {/* Diagonal Copy of Top-Left Star (Below it) */}
        <div className="absolute top-[calc(5rem+20px)] left-[calc(5rem+20px)]">
            <img src={star} alt="Star Icon" className="w-10 h-10" />
        </div>

        {/* Copy of Star SVG in Bottom-Left Corner */}
        <div className="absolute bottom-5 left-5">
            <img src={star} alt="Star Icon" className="w-10 h-10" />
        </div>

        {/* Diagonal Copy of Bottom-Left Star (Above it) */}
        <div className="absolute bottom-[calc(5rem+20px)] left-[calc(5rem+20px)]">
            <img src={star} alt="Star Icon" className="w-10 h-10" />
        </div>



      {/* Welcome Section in the Center */}
      <div className="flex justify-center items-center h-full">
        {/* Transparent Rounded Rectangle with Flex Column Layout */}
        <div className="bg-transparent p-8 rounded-xl border-2 border-transparent flex flex-col justify-between items-center space-y-4 w-4/5 max-w-lg">
          
          {/* Welcome Text */}
          <div className="text-purple-600 text-3xl font-semibold text-center whitespace-nowrap">
            Welcome to Shop Hebron
          </div>

          {/* Grin Icon */}
          <img src={grin} alt="Grin" className="w-24 h-24" />

          {/* Continue to Products Button */}
          <Link to="/products" className="w-full">
            <button className="w-full py-4 border-2 border-yellow-500 rounded-full text-purple-600 font-semibold hover:bg-yellow-500 hover:text-white transition-colors text-xl">
              Continue to Products
            </button>
          </Link>

          {/* OR Text */}
          <div className="text-purple-600 text-2xl font-semibold">
            OR
          </div>

          {/* Continue to Services Button */}
          <Link to="/services" className="w-full">
            <button className="w-full py-4 border-2 border-yellow-500 rounded-full text-purple-600 font-semibold hover:bg-yellow-500 hover:text-white transition-colors text-xl">
              Continue to Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;