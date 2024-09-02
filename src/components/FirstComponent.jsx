import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const FirstComponent = () => {
  return (
    <div className="flex justify-between">
      <div className="flex w-1/3 md:w-1/4 flex-col gap-6 py-10 ml-6 sm:px-10">
        <div className="flex items-center w-full gap-2">
          <p className="font-poppins text-sm text-nowrap">Woman's Fashion </p>
          <FaAngleRight size={16} />
        </div>

        <div className="flex items-center w-full gap-2">
          <p className="font-poppins text-nowrap text-sm">Men's Fashion </p>
          <FaAngleRight size={16} />
        </div>

        <p className="font-poppins text-nowrap text-sm">Electronics</p>
        <p className="font-poppins text-nowrap text-sm">Home & Lifestyle</p>
        <p className="font-poppins text-nowrap text-sm">Medicine</p>
        <p className="font-poppins text-nowrap text-sm">Sports & Outdoor</p>
        <p className="font-poppins text-nowrap text-sm">Baby's & Toys</p>
        <p className="font-poppins text-nowrap text-sm">Groceries & Pets</p>
        <p className="font-poppins text-nowrap text-sm">Health & Beauty</p>
      </div>

      <div className="h-[420px] w-px bg-gray-400 mx-2"></div>

      <div className="w-2/3 md:w-3/4 px-10 py-8 h-full">
        <img
          className="border w-full h-96 object-fit border-b"
          src="https://t4.ftcdn.net/jpg/04/57/27/23/360_F_457272301_TAhCbk02tLPvPftIQfiWML5UHFiyc1XQ.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default FirstComponent;
