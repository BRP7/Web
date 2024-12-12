import React from "react";

function Landing() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/your-image-path.jpg')",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black/50">
        <h1 className="text-6xl text-neonBlue font-bold">NxtSite</h1>
        <p className="text-white text-xl mt-4 text-center max-w-xl">
          We create unique portfolios to help you stand out in this noisy and crowded digital world.
        </p>
        <a
          href="#about"
          className="mt-8 bg-neonBlue text-darkGray px-6 py-3 rounded-full text-lg font-semibold hover:bg-pureWhite transition-all"
        >
          Explore More
        </a>
      </div>
    </div>
  );
}

export default Landing;
