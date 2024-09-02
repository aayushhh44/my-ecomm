import React, { useContext, useState } from "react";
import { CiLogout, CiSearch, CiUser } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Square2StackIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { CartContext } from "../Context/CartContext";
import Products from '../JSON/products.json';


const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setIsSearchActive((prev) => !prev);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const filteredProducts = Products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const handleProductClick = (product) => {
    navigate(`/product-desc/${product.id}`);
    setSearchQuery(""); 
    setIsSearchActive(false); 
  };

  return (
    <>
      <div className="flex py-6 sm:pt-8 sm:px-20 justify-between items-center">
        <h3 className="sm:text-2xl font-poppins cursor-pointer">Aayush Store</h3>

        <div className="flex gap-x-10 items-center">
          <Link to="/" className="font-poppins hidden sm:block cursor-pointer">
            Home
          </Link>
          <p className="font-poppins hidden sm:block cursor-pointer">Contact</p>
          <Link to="about-us" className="font-poppins hidden sm:block cursor-pointer">
            About
          </Link>
          <Link to="/login" className="font-poppins cursor-pointer">
            Sign Up
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative">
            <motion.input
              className="pl-4 placeholder:text-sm focus:outline-none bg-[#f5f5f5] font-poppins pr-4 py-1 border border-red-600"
              type="search"
              placeholder="What are you looking for?"
              initial={{ width: "200px" }}
              animate={{ width: isSearchActive ? "300px" : "200px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              value={searchQuery}
              onChange={handleSearchInputChange}
              onFocus={handleSearchClick}
              onBlur={() => setTimeout(() => setIsSearchActive(false), 200)} 
            />
            <CiSearch
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={handleSearchClick}
            />
            
            {isSearchActive && searchQuery && (
              <div className="absolute top-full mt-2 w-full shadow-lg rounded-lg z-10">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="p-2  text-black cursor-pointer"
                      onClick={() => handleProductClick(product)}
                    >
                      {product.productName}
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-gray-500">No results found</div>
                )}
              </div>
            )}
          </div>

          <Link to="/wish-list" className="cursor-pointer">
            <IoMdHeartEmpty size={25} />
          </Link>

          <Link to="/cart" className="cursor-pointer relative">
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 ">
              {cartItems.length}
            </div>

            <IoCartOutline size={25} />
          </Link>

          <Menu as="div" className="relative">
            <MenuButton className="focus:outline-none">
              <img
                className="w-10 h-10 cursor-pointer rounded-full"
                src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                alt="Rounded avatar"
              />
            </MenuButton>
            <MenuItems className="absolute right-0 mt-2 w-52 origin-top-right rounded-xl border border-gray-200 bg-white p-1 text-sm text-black shadow-lg transition duration-100 ease-out focus:outline-none">
              <MenuItem>
                {({ active }) => (
                  <button
                    className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 ${
                      active ? "bg-gray-100" : ""
                    }`}
                  >
                    <CiUser className="w-4 h-4 fill-gray-600" />
                    Profile
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <button
                    className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 ${
                      active ? "bg-gray-100" : ""
                    }`}
                  >
                    <Square2StackIcon className="w-4 h-4 fill-gray-600" />
                    My Order
                  </button>
                )}
              </MenuItem>
              <div className="my-1 h-px bg-gray-200" />

              <MenuItem>
                {({ active }) => (
                  <button
                    className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 ${
                      active ? "bg-gray-100" : ""
                    }`}
                  >
                    <CiLogout className="w-4 h-4 fill-gray-600" />
                    Log Out
                  </button>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
      <hr className="w-full" />
    </>
  );
};

export default Navbar;