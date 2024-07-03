import React from 'react';
import backgroundHero from '/src/assets/img/Hero.png';

const Hero = () => {
  // Logic Area
  const heroImage = {
    backgroundImage: `url(${backgroundHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    // UI
    <section className="w-full h-[600px] flex justify-center items-center" style={heroImage}>
      <div className="w-[800px] h-[380px] flex flex-col justify-center items-start mx-auto gap-7 leading-6">
        <h1 className="text-white font-semibold text-6xl uppercase">
          hello everyone <br /> here is the new collection
        </h1>
        <div className="w-[550px]">
          <p className="text-gray-300 text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
