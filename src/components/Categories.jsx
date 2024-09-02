import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { CiMobile3 } from "react-icons/ci";
import { HiComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="p-16">
      <div className="flex gap-2 items-center mb-2">
        <div className="bg-[#DB4444] rounded-sm h-8 w-4"></div>
        <p className="font-poppins">Categories</p>
      </div>

      <div className="flex justify-between">
        <h2 className="text-3xl">Browse by Category</h2>
        <div className="flex gap-4">
          <GoChevronLeft className="cursor-pointer" />
          <GoChevronRight className="cursor-pointer" />
        </div>
      </div>

      <div className="flex gap-8 mt-8">
        <Link to='/category/phones' className="cursor-pointer w-96 p-4 px-10 flex flex-col items-center gap-4">
          <img className="h-44" src="/assets/phone.webp" alt="" />
          <p>Phones</p>
        </Link>

        <Link to='/category/computers' className="cursor-pointer p-4 px-10 w-96 flex flex-col items-center gap-4">
          <img className="h-44" src="/assets/computer.jpeg" alt="" />
          <p>Computers</p>
        </Link>

        <Link to='/category/watches' className="cursor-pointer w-96 p-4 px-10 flex flex-col items-center gap-4">
          <img className="h-44" src="/assets/watch.webp" alt="" />
          <p>Watches</p>
        </Link>

        <Link to='/category/shoes' className="cursor-pointer w-96 p-4 px-10 flex flex-col items-center gap-4">
          <img
            className="h-44"
            src="https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Shoes"
          />

          <p>Shoes</p>
        </Link>
        {/*

            <div className='border cursor-pointer p-4 px-10 flex flex-col items-center'>
                <CiMobile3 size={80} className='font-thin ' />
                <p >Phones</p>

            </div>

            <div className='border cursor-pointer p-4 px-10 flex flex-col items-center'>
                <CiMobile3 size={80} className='font-thin ' />
                <p >Phones</p>

            </div> */}
      </div>
    </div>
  );
};

export default Categories;
