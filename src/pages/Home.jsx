import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../view/Hero';
import DisplayProducts from '../view/DisplayProducts';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <DisplayProducts />
    </div>
  );
};

export default Home;
