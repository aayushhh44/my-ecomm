import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-black p-1 flex justify-around items-center h-8 text-primary">
      <div className="flex gap-2">
        <p className="font-poppins font-light text-xs sm:text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link className="underline text-sm font-poppins">ShopNow</Link>
      </div>

      <div>
        <p className="font-poppins font-light hidden sm:block text-sm">
          English
        </p>
      </div>
    </div>
  );
};

export default TopBar;
