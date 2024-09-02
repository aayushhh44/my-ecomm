import React, { useRef } from "react";
import Slider from "react-slick";
import Products from "../JSON/products.json";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Product1 = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default number of slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="p-4 sm:p-16">
      <div className="flex justify-end gap-4">
        <motion.div
          onClick={goToPrev}
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GoChevronLeft size={30} />
        </motion.div>
        <motion.div
          onClick={goToNext}
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GoChevronRight size={30} />
        </motion.div>
      </div>
      
      <Slider ref={sliderRef} {...settings}>
        {Products.map((product) => (
          <motion.div
            key={product?.id}
            className="p-2"
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex flex-col gap-2 items-center bg-[#f6f6f6] w-full relative">
              <span className="absolute top-1 left-1 w-12 font-poppins bg-[#DB4444] text-white items-center rounded-sm px-2 py-1 text-xs font-thin ring-1 ring-inset ring-gray-500/10">
                -{product.discountPercent}%
              </span>
              <motion.img
                className="w-60 h-60"
                src={product.image}
                alt={product.productName}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              />
              <p className="font-poppins">{product.productName}</p>
              <p>{product?.category}</p>
              <p className="text-[#DB4444] font-poppins">
                ${product.discountedPrice}
                <span className="text-gray-400">${product.price}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </Slider>

      <div className="flex justify-center py-8">
        <motion.button
        onClick={() =>navigate('/product')}
          className="bg-[#DB4444] text-white p-2 px-6 rounded-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          View All Products
        </motion.button>
      </div>

      <hr className="mx-16" />
    </div>
  );
};

export default Product1;
