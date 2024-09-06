import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Products from "../JSON/products.json";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

import AllProducts from "../JSON/Phones.json";

const TodaysSalePage = () => {
  const navigate = useNavigate();

  const { addToCart, cartItems } = useContext(CartContext);

  console.log(cartItems);
  return (
    <div className="p-4 sm:p-16">
      <h1 className="text-center text-3xl mb-2 font-poppins">
        What are you shopping for today?
      </h1>

      <h2 className="text-xl p-4 underline">Shoes</h2>

      <AnimatePresence mode="wait">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 justify-between">
          {Products.map((phone) => (
            <div
              key={phone.id}
              className="relative border group cursor-pointer"
            >
              <motion.div
                onClick={() =>
                  navigate(`/product-desc/${phone?.id}`, { state: AllProducts })
                }
                className="cursor-pointer flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <img className="w-44" src={phone?.image} alt={phone?.model} />
                <p>{phone?.model}</p>
                <p>{phone?.price}</p>
              </motion.div>

              {/* <div className="flex flex-col gap-2">
            <button
              onClick={() =>
                navigate(`/product-desc/${phone?.id}`, { state: Products })
              }
              className="bg-white text-black p-2 rounded-md"
            >
              View
            </button>
            <button
              onClick={() => addToCart(phone)}
              className="bg-red-500 p-2 rounded-md text-white"
            >
              Add to Cart
            </button>
          </div> */}
            </div>
          ))}
        </div>
      </AnimatePresence>

      <h2 className="text-xl underline p-4">Phones</h2>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 justify-between">
        {AllProducts?.iPhones.map((phone) => (
          <div key={phone.id} className="relative border group cursor-pointer">
            <motion.div
              onClick={() =>
                navigate(`/product-desc/${phone?.id}`, { state: AllProducts })
              }
              className="cursor-pointer flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <img className="w-44" src={phone?.image} alt={phone?.model} />
              <p>{phone?.model}</p>
              <p>{phone?.price}</p>
            </motion.div>

            {/* <div className="flex flex-col gap-2">
                  <button
                    onClick={() =>
                      navigate(`/product-desc/${phone?.id}`, { state: Products })
                    }
                    className="bg-white text-black p-2 rounded-md"
                  >
                    View
                  </button>
                  <button
                    onClick={() => addToCart(phone)}
                    className="bg-red-500 p-2 rounded-md text-white"
                  >
                    Add to Cart
                  </button>
                </div> */}
          </div>
        ))}
      </div>

      <h2 className="text-xl p-4">Computers</h2>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 justify-between">
        {AllProducts?.Computers.map((phone) => (
          <div key={phone.id} className="relative border group cursor-pointer">
            <motion.div
              onClick={() =>
                navigate(`/product-desc/${phone?.id}`, { state: AllProducts })
              }
              className="cursor-pointer flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <img className="w-44" src={phone?.image} alt={phone?.model} />
              <p>{phone?.model}</p>
              <p>{phone?.price}</p>
            </motion.div>

            {/* <div className="flex flex-col gap-2">
                  <button
                    onClick={() =>
                      navigate(`/product-desc/${phone?.id}`, { state: Products })
                    }
                    className="bg-white text-black p-2 rounded-md"
                  >
                    View
                  </button>
                  <button
                    onClick={() => addToCart(phone)}
                    className="bg-red-500 p-2 rounded-md text-white"
                  >
                    Add to Cart
                  </button>
                </div> */}
          </div>
        ))}
      </div>

      <h2 className="text-xl underline p-4">Watches</h2>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 justify-between">
        {AllProducts?.Watches.map((phone) => (
          <div key={phone.id} className="relative border group cursor-pointer">
            <motion.div
              onClick={() =>
                navigate(`/product-desc/${phone?.id}`, { state: AllProducts })
              }
              className="cursor-pointer flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <img className="w-44" src={phone?.image} alt={phone?.model} />
              <p>{phone?.model}</p>
              <p>{phone?.price}</p>
            </motion.div>

            {/* <div className="flex flex-col gap-2">
                  <button
                    onClick={() =>
                      navigate(`/product-desc/${phone?.id}`, { state: Products })
                    }
                    className="bg-white text-black p-2 rounded-md"
                  >
                    View
                  </button>
                  <button
                    onClick={() => addToCart(phone)}
                    className="bg-red-500 p-2 rounded-md text-white"
                  >
                    Add to Cart
                  </button>
                </div> */}
          </div>
        ))}
      </div>

      <h2 className="text-xl underline p-4">Shoes</h2>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 justify-between">
        {AllProducts?.Shoes.map((phone) => (
          <div key={phone.id} className="relative border group cursor-pointer">
            <motion.div
              onClick={() =>
                navigate(`/product-desc/${phone?.id}`, { state: AllProducts })
              }
              className="cursor-pointer flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <img className="w-44" src={phone?.image} alt={phone?.model} />
              <p>{phone?.model}</p>
              <p>{phone?.price}</p>
            </motion.div>

            {/* <div className="flex flex-col gap-2">
                  <button
                    onClick={() =>
                      navigate(`/product-desc/${phone?.id}`, { state: Products })
                    }
                    className="bg-white text-black p-2 rounded-md"
                  >
                    View
                  </button>
                  <button
                    onClick={() => addToCart(phone)}
                    className="bg-red-500 p-2 rounded-md text-white"
                  >
                    Add to Cart
                  </button>
                </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysSalePage;
