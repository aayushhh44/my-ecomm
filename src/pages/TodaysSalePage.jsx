import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Products from "../JSON/products.json";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const TodaysSalePage = () => {
  const navigate = useNavigate();

  const { addToCart, cartItems } = useContext(CartContext);

  console.log(cartItems);
  return (
    <div className="p-16">
      <h1 className="text-center text-3xl mb-2">Today's Sale</h1>

      <AnimatePresence mode="wait">
        <div className="grid grid-cols-4 gap-4 justify-between">
          {Products.map((pro) => (
            <div key={pro.id} className="relative group cursor-pointer">
              <motion.div
                onClick={() =>
                  navigate(`/product-desc/${pro?.id}`, { state: Products })
                }
                className="cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <img className="w-96" src={pro?.image} alt={pro?.productName} />
                <p>{pro?.productName}</p>
                <p>{pro?.price}</p>
              </motion.div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() =>
                      navigate(`/product-desc/${pro?.id}`, { state: Products })
                    }
                    className="bg-white text-black p-2 rounded-md"
                  >
                    View
                  </button>
                  <button
                    onClick={() => addToCart(pro)}
                    className="bg-red-500 p-2 rounded-md text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default TodaysSalePage;
