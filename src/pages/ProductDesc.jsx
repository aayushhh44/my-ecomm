// ProductPage.js
import React from "react";
import { useParams } from "react-router-dom";
import Products from "../JSON/products.json";
import { IoMdHeartEmpty } from "react-icons/io";
import { GrDeliver } from "react-icons/gr";


const ProductPage = () => {
  const { id } = useParams();
  const product = Products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-16">
    {/* <div className="flex flex-col items-center">

        <img
          className="w-96 h-96"
          src={product.image}
          alt={product.productName}
        />
        <h1 className="text-3xl font-poppins mt-4">{product.productName}</h1>
        <p className="text-[#DB4444] font-poppins mt-2">
          ${product.discountedPrice}
          <span className="text-gray-400">${product.price}</span>
        </p>
        <p className="mt-4">{product.description}</p> 
      </div> */}

        <div className="flex ">

        
      <div className="w-1/2 p-4">
        <img src={product?.image} alt="Product Image" />
        
      </div>

      <div className="w-1/2 flex flex-col gap-4 font-poppins">
        <h1 className="text-3xl">{product?.productName}</h1>
        <h2 className="text-green-600">In stock</h2>
        <h3 className="text-2xl">$ {product?.price}</h3>
        <p>{product?.description}</p>
        <hr />

        <div className="flex justify-between">
          <div className="flex justify-start">
            <button className="border w-8 rounded-sm">-</button>
            <p className="border w-8 place-items-center rounded-sm">2</p>
            <button className="border w-8 rounded-sm bg-[#DB4444] text-white">+</button>
          </div>

          <button className="bg-[#DB4444] p-2 rounded-sm text-white">Buy Now</button>

          <div className="border rounded-md">
          <IoMdHeartEmpty  />

          </div>
        </div>

        <div className="border flex items-center justify-around p-4 gap-4">
          <GrDeliver size={60} />
          <div>
            <h5 className="text-xl">Free Delivery</h5>
            <p className=" underline">Enter your postal code for </p>
          </div>


        </div>

      </div>


      </div>

    </div>
  );
};

export default ProductPage;
