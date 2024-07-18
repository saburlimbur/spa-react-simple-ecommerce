import React from 'react';

const SearchProducts = () => {
  return (
    <div 
    className="flex border border-gray-300 items-center p-4 rounded-lg ml-auto outline-none gap-3">

      <img 
      src="/src/assets/icons/ic_outline-search.svg" 
      alt="Search icon" />
      <input 
      className="outline-none" 
      type="text" 
      placeholder="Search Product" />
      
    </div>
  );
};

export default SearchProducts;
