import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-6 flex flex-col justify-between items-center gap-10">
      <div className="w-full justify-center flex items-center gap-[40rem] p-10 border-b-2 border-slate-300">
        <div>
          <img src="/src/assets/img/Logo.png" />
        </div>

        <nav className='flex justify-center gap-10 text-md font-bold'>
        <NavLink to="/" activeClassName="nav-active" className="hover:text-slate-500 transition-all ease-in-out">
          Home
        </NavLink>

        <NavLink activeClassName="nav-active" className="hover:text-slate-500 transition-all ease-in-out">
          About
        </NavLink>

        <NavLink to="/products" activeClassName="nav-active" className="hover:text-slate-500 transition-all ease-in-out">
          Products
        </NavLink>
        </nav>

        <div className='flex justify-center gap-4'>
        <img src='/src/assets/icons/Facebook.svg'/>
        <img src='/src/assets/icons/Instagram.svg'/>
        <img src='/src/assets/icons/Instagram.svg'/>
        </div>

      </div>

      <div className="text-center text-gray-500">
          <p>&copy; 2024 <span className="font-bold">saburlimbur</span>. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
