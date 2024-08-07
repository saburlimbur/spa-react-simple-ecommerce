import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchProducts from './SearchProducts';

const Navbar = () => {
  return (
    <header className="font-bold text-md flex items-center bg-[#ffffff] border border-b-slate-300 w-full py-[20px] px-[80px] ml-auto">
      <div className="mr-[18rem]">
        <Link to={'/'}>
          <img src="/src/assets/img/Logo.png" />
        </Link>
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
      <SearchProducts />
    </header>
  );
};

export default Navbar;
