import React from 'react';
import './index.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './view/Hero';
import DisplayProducts from './view/DisplayProducts';
import DetailsProducts from './view/DetailsProducts';
import Home from './pages/Home';
import Footer from './view/Footer';
import Products from './pages/Products';

const App = () => {
  return (
    <main className="w-screen min-h-screen items-center justify-center overflow-y-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/details/:id" element={<DetailsProducts />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
