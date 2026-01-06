import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-12 border-b-4 border-yellow-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side: Main Logo */}
        <div className="flex items-center gap-4">
          <img 
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg/800px-Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg.png" 
             alt="Logo Tut Wuri Handayani" 
             className="h-16 w-auto"
          />
          <div className="flex flex-col text-left">
             <h1 className="text-2xl font-bold text-blue-800 tracking-wide uppercase leading-tight">
               Kemendikdasmen
             </h1>
             <p className="text-sm font-semibold text-gray-700">
               BBPMP Provinsi Jawa Tengah
             </p>
          </div>
        </div>

        {/* Right Side: Badges/Certifications */}
        <div className="flex items-center gap-3">
          {/* Mockup for the badges in the image (WBBM, ZI, etc.) */}
          <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center text-xs text-white font-bold border-2 border-yellow-400 shadow-sm">
            A
          </div>
          <div className="flex flex-col items-center">
             <div className="text-[10px] text-blue-900 font-bold">BBPMP Jateng</div>
             <div className="h-1 bg-gradient-to-r from-blue-500 to-green-500 w-full mt-1"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
