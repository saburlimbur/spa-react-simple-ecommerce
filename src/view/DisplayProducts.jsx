import React from 'react';
import { Link } from 'react-router-dom';
import ListProducts from '../constant/ListProducts';

const DisplayProducts = () => {
  return (
    <section className="py-10 flex items-center justify-center flex-col">
      <div className="mb-8 select-none">
        <h1 className="uppercase text-3xl text-black font-bold">Explore Our Products</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {/* menampilkan data product dengan array map */}
        {ListProducts.map((product) => (
          
          <div 
          key={product.id} 
          className="bg-white shadow-md rounded-lg p-6 w-96 flex flex-col justify-between border border-slate-200 cursor-pointer">
            <img 
            src={product.image} 
            alt="product" 
            className="h-50 w-full object-cover mb-4 hover:scale-110 ease-in duration-300" />
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold text-blue-900 mb-2">{product.product_name}</h1>
              <p className="text-gray-600 mb-2">Category: {product.category}</p>
              <p className="text-gray-600 mb-2">Price: {product.price}</p>

              <div className="mt-auto">
                <Link 
                to={`/products/details/${product.id}`} 
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-sm inline-block mt-2 transition-colors delay-75 ">
                  Details
                </Link>
              </div>
            </div>
          </div>

        ))}
      </div>
    </section>
  );
};

export default DisplayProducts;
