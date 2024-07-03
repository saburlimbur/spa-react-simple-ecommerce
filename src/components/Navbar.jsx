import React from 'react';
import { NavLink } from 'react-router-dom';
import InputSearch from './InputSearch';

const Navbar = () => {
  return (
    <header className="font-bold text-md flex items-center bg-[#ffffff] border border-b-slate-300 w-full py-[20px] px-[80px] ml-auto">
      <div className="mr-[18rem]">
        <img src="/src/assets/img/Logo.png" />
      </div>

      <nav className=" flex mr-auto gap-8">
        <NavLink
          // to="/about"
          activeClassName="nav-active"
          className="hover:text-slate-500 transition-all ease-in-out"
        >
          About
        </NavLink>
        <NavLink exact to="/products" activeClassName="nav-active" className="hover:text-slate-500 transition-all ease-in-out">
          Products
        </NavLink>
        
      </nav>
      <InputSearch />
    </header>
  );
};

export default Navbar;
