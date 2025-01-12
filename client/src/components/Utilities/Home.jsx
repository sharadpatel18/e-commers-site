import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <div className="relative w-full h-fit">
      <section className="relative container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:flex-row lg:justify-between mb-11">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl text-white">
            Find Your <span className="text-violet-600">Products</span> And
            Start Buying{" "}
            <span className="text-yellow-400">Without wasting your Time</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-gray-200">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              to="products"
              className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-white shadow-md hover:bg-violet-700"
            >
              Buy Product
            </Link>
            <Link
              rel="noopener noreferrer"
              to="cart"
              className="px-8 py-3 text-lg font-semibold border rounded text-violet-600 border-violet-600 hover:bg-violet-100"
            >
              Show Cart
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
