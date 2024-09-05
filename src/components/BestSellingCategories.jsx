import React, { useRef, useState } from "react";
import Products from "../JSON/products.json";
import { IoEye } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { motion } from "framer-motion";

const BestSellingCategories = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const sliderRef = useRef(null);

  const handleEyeClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const gotoRight = () => {
    sliderRef.current.slickNext();
  };

  const gotoLeft = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  return (
    <div className="p-16">
      <div className="flex gap-2 items-center mb-2">
        <div className="bg-[#DB4444] rounded-sm h-8 w-4"></div>
        <p className="font-poppins">Categories</p>
      </div>

      <div className="flex justify-between mb-8">
        <h2 className="text-3xl">Best Selling Products</h2>
        <div className="flex gap-2">
          <motion.div
            onClick={gotoLeft}
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GoChevronLeft size={30} />
          </motion.div>
          <motion.div
            onClick={gotoRight}
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GoChevronRight size={30} />
          </motion.div>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {Products.map((product) => (
          <div className="flex" key={product.id}>
            <div className="flex flex-col gap-4 items-center bg-[#f6f6f6] sm:w-60 relative ">
              <IoEye
                className="absolute border cursor-pointer right-2 top-2"
                onClick={() => handleEyeClick(product)}
              />
              <span className="absolute top-1 left-1 w-12 font-poppins bg-[#DB4444] text-white items-center rounded-sm px-2 py-1 text-xs font-thin ring-1 ring-inset ring-gray-500/10">
                -{product.discountPercent}%
              </span>
              <img
                className="w-52 h-52"
                src={product.image}
                alt={product.productName}
              />
              <p className="font-poppins">{product.productName}</p>
              <p className="text-[#DB4444] font-poppins">
                ${product.discountedPrice}
                <span className="text-gray-400">${product.price}</span>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>

    // <div>
    //   {/* <div className="flex gap-4 px-16">
    //     {Products.map((product) => (
    //       <div className="flex" key={product.id}>
    //         <div className="flex flex-col gap-4 items-center bg-[#f6f6f6] w-60 relative ">
    //           <IoEye
    //             className="absolute border cursor-pointer right-2 top-2"
    //             onClick={() => handleEyeClick(product)}
    //           />
    //           <span className="absolute top-1 left-1 w-12 font-poppins bg-[#DB4444] text-white items-center rounded-sm px-2 py-1 text-xs font-thin ring-1 ring-inset ring-gray-500/10">
    //             -{product.discountPercent}%
    //           </span>
    //           <img
    //             className="w-52 h-52"
    //             src={product.image}
    //             alt={product.productName}
    //           />
    //           <p className="font-poppins">{product.productName}</p>
    //           <p className="text-[#DB4444] font-poppins">
    //             ${product.discountedPrice}
    //             <span className="text-gray-400">${product.price}</span>
    //           </p>
    //         </div>
    //       </div>
    //     ))}
    //   </div> */}

    //   {selectedProduct && (
    //     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    //       <div className="bg-white p-4 rounded-lg shadow-lg relative">
    //         <button
    //           className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
    //           onClick={closeModal}
    //         >
    //           &times;
    //         </button>
    //         <img
    //           src={selectedProduct.image}
    //           alt={selectedProduct.productName}
    //           className="w-96 h-96"
    //         />
    //         <p className="font-poppins text-center mt-2">
    //           {selectedProduct.productName}
    //         </p>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export default BestSellingCategories;
