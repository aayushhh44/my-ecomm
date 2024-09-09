import React from "react";
import products from '../JSON/aesthetic.json';


const NewArrival = () => {

  // products.map((item) =>(
    
  // ))
  return (
    <div className="sm:p-16 w-full">
      <div className="p-8">
        <div className="flex gap-2 items-center mb-2">
          <div className="bg-[#DB4444] rounded-sm h-8 w-4"></div>
          <p className="font-poppins">Featured</p>
        </div>

        <h1 className="text-3xl">New Arrival</h1>
      </div>
      <div className="flex p-8 flex-col sm:grid grid-cols-2 gap-3">
        <div className="bg-[#0d0d0d] relative flex justify-center p-6">
          <img src="/assets/image.png" />
          <div className="absolute flex gap-2 sm:gap-4 flex-col bottom-2 p-8 left-0 ">
            <h2 className="text-white text-xl text-nowrap sm:text-2xl">
              Play Station 5
            </h2>
            <p className="text-white sm:w-64 text-xs sm:text-sm">
              Black and White version of the PS5 coming out on sale
            </p>
            <p className="underline cursor-pointer text-white">Shop Now</p>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-2">
          <div className="bg-[#0d0d0d] relative col-span-2 p-6 flex justify-end">
            <img src="/assets/women.png" alt="" srcset="" />
            <div className="absolute flex gap-2 sm:gap-4 flex-col bottom-2 p-8 left-0 ">
              <h2 className="text-white text-xl text-nowrap sm:text-2xl">
                Womenn's Collection
              </h2>
              <p className="text-white sm:w-64 text-xs sm:text-sm">
                Featured woman collections that give you another vibe.
              </p>
              <p className="underline cursor-pointer text-white">Shop Now</p>
            </div>
          </div>

          <div className="bg-[#0d0d0d] relative col-span-1 flex justify-center p-6">
            <img src="/assets/speaker.png" alt="" />

            <div className="absolute flex gap-2 flex-col bottom-2 p-8 left-0 ">
              <h2 className="text-white text-xl text-nowrap sm:text-2xl">
                Speakers
              </h2>
              <p className="text-white sm:w-64 text-xs sm:text-sm">
                Amazing wirespeakers are on sale
              </p>
              <p className="underline cursor-pointer text-white">Shop Now</p>
            </div>
          </div>

          <div className="bg-[#0d0d0d] relative flex justify-center col-span-1 gap-2 p-6">
            <img src="/assets/perfume.png" alt="" />
            <div className="absolute flex gap-2  flex-col bottom-2 p-8 left-0 ">
              <h2 className="text-white text-xl text-nowrap sm:text-2xl">
                Perfume
              </h2>
              <p className="text-white sm:w-64 text-xs sm:text-sm">
                Amazing perfume on sale
              </p>
              <p className="cursor-pointer underline text-white">Shop Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
