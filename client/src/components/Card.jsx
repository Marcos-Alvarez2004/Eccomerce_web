// REACT
import React from "react";
import { Link } from "react-router-dom";
import ProductSelected from "../Pages/ProductSelected";

const Card = ({ product, toggleFavorite, addToCart }) => {
  return (
    <div className="w-64 rounded overflow-hidden mx-4 relative border-animation flex justify-center items-center flex-col">
      <main className="z-10 w-full p-1 text-center">
        {/* IMG */}
        <img
          src={product.img}
          alt={product.name}
          className="w-full rounded-t h-36 bg-white"
        />
        <div className="border-2 border-white rounded-b">
          {/* NAME */}
          <div className="pt-4">
            <div className="font-bold text-xl">{product.name}</div>
          </div>
          {/* BTN */}
          <div
            onClick={() => addToCart(product)}
            className="w-full py-8 flex items-center justify-center cursor-pointer"
          >
            <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-500 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-5 h-5 text-green-400"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-5 h-5 text-green-400"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                AGREGAR A CARRITO
              </span>
            </div>
          </div>

          <div className="px-6 py-4">
            <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-indigo-500 mr-2">
              ${product.price}
            </span>
          </div>
          <div>
            <button
              className={`favorite-btn ${product.isFavorite ? "favorite" : ""}`}
              onClick={() => toggleFavorite(product.id)}
            >
              &#x2665;
            </button>
          </div>
          <div>
            <button>
              <Link to={`/products/${product.id}`}>Ver detalles</Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Card;
