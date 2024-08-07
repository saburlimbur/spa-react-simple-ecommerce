import React from 'react';
import ListProducts from '../components/constant/ListProducts';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const DetailsProducts = () => {
  const { id } = useParams();
  const detailProducts = ListProducts.find((e) => e.id == parseInt(id));

  console.log(detailProducts);
  return (
    <div>
      <Navbar />
      <section className="pt-[100px] pb-[100px] md:pt-32 md:pb-12 lg:py-32 min-h-[70vh] flex items-center justify-center bg-gray-100">
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-10 gap-10 max-w-4xl w-full">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-xs rounded-lg" alt="product" src={detailProducts.image} />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl font-semibold mb-4 max-w-[450px] mx-auto lg:mx-0">{detailProducts.product_name}</h1>
            <div className="text-2xl text-red-500 font-bold mb-6">{detailProducts.price}</div>
            <p className="text-gray-600 mb-4 font-medium">{detailProducts.category}</p>
            <p className="text-gray-700 mb-8 leading-relaxed">{detailProducts.desc}</p>

            <Link to={`/`} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-sm inline-block mt-2 transition-all">
              Back to Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsProducts;
