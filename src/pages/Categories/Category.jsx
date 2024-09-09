import React, { useContext } from "react";
import Phoness from "../../JSON/Phones.json";
import { useLocation, useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const Category = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const {addToCart} = useContext(CartContext);

  const { name } = useParams();
  console.log(name);

  const Variants = {
    phones: Phoness?.iPhones,
    computers: Phoness?.Computers,
    watches: Phoness?.Watches,
    shoes: Phoness?.Shoes
  }

 

  // console.log(Variants.watches)

  const Categ = Variants[name] || []

  console.log(Categ)
   return (
    <div className="p-4 sm:p-12">
      {/* <img className='h-96 w-full object-fit' src="https://img.freepik.com/premium-photo/mobile-phone-orange-office-desk-horizontal-background-banner-3d-illustration_118047-5833.jpg" alt="" /> */}

      <h1 className="font-poppins text-gray-500"> Home{pathname}</h1>
      <h2 className="font-poppins text-sm my-8">{name} for you</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
        {/* {name === "phones" ? (
          Phoness?.iPhones?.map((iphn) => (
            <div className="flex flex-col cursor-pointer justify-center items-center shadow-md">
              <img className="w-56" src={iphn?.image} alt="" />
              <p className="font-poppins">{iphn?.model}</p>
              <p className="font-semibold font-poppins">
                MRP: रु {iphn?.price}
              </p>
            </div>
          ))
        ) : (
          <h1>Items not found</h1>
        )} */}

        {Categ.map((item) => (
           <div
           key={item?.id}
           className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow "
         >
           <div className="cursor-pointer">
             <img
               onClick={() =>
                 navigate(`/product-desc/${item?.id}`, {
                   state: Products,
                 })
               }
               className="p-8 h-56 w-56 rounded-t-lg"
               src={item?.image}
               alt="product image"
             />
           </div>
           <div className="px-5 pb-5">
             <div>
               <h5 className=" font-poppins tracking-tight">
                 Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
               </h5>
             </div>
             <div className="flex items-center mt-2.5 mb-5">
               <div className="flex items-center space-x-1 rtl:space-x-reverse">
                 <svg
                   className="w-4 h-4 text-yellow-300"
                   aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor"
                   viewBox="0 0 22 20"
                 >
                   <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                 </svg>
                 <svg
                   className="w-4 h-4 text-yellow-300"
                   aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor"
                   viewBox="0 0 22 20"
                 >
                   <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                 </svg>
                 <svg
                   className="w-4 h-4 text-yellow-300"
                   aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor"
                   viewBox="0 0 22 20"
                 >
                   <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                 </svg>
                 <svg
                   className="w-4 h-4 text-yellow-300"
                   aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor"
                   viewBox="0 0 22 20"
                 >
                   <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                 </svg>
                 <svg
                   className="w-4 h-4 text-gray-200 dark:text-gray-600"
                   aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor"
                   viewBox="0 0 22 20"
                 >
                   <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                 </svg>
               </div>
               <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                 5.0
               </span>
             </div>
             <div className="flex items-center justify-between">
               <span className="text-sm font-bold text-gray-900">
                 NPR {item?.price}
               </span>
               <button
                 onClick={() => addToCart(item)}
                 className="text-white bg-[#DA4443] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2 text-center"
               >
                 Add to cart
               </button>
             </div>
           </div>
         </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
