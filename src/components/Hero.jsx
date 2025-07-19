import React from "react";

function Hero() {
  return (
    <div className="w-screen h-screen bg-[url('/src/assets/heroImage.png')] bg-no-repeat bg-center bg-cover flex items-center">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 max-w-[700px] text-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Welcome to <br /> Hotel Bliss
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90">
          Discover comfort and elegance in every stay. Experience luxury like
          never before.
        </p>
        <button className="mt-8 bg-white text-indigo-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-100 transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
