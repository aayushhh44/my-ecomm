import React from "react";
import Phoness from "../../JSON/Phones.json";
import { useLocation, useParams } from "react-router-dom";

const Category = () => {
  const location = useLocation();
  const pathname = location.pathname;

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
    <div className="p-4">
      {/* <img className='h-96 w-full object-fit' src="https://img.freepik.com/premium-photo/mobile-phone-orange-office-desk-horizontal-background-banner-3d-illustration_118047-5833.jpg" alt="" /> */}

      <h1 className="font-poppins"> Home{pathname}</h1>
      <h2 className="font-poppins text-2xl">{name} for you</h2>
      <div className="grid grid-cols-4 gap-4 justify-center items-center">
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
          <div className="flex flex-col cursor-pointer justify-center items-center shadow-md">
             <img className="w-56" src={item?.image} alt="" />
              <p className="font-poppins">{item?.model}</p>
              <p className="font-semibold font-poppins">
                MRP: रु {item?.price}
              </p>


          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
