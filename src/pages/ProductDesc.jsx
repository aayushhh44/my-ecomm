// ProductPage.js
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Products from "../JSON/products.json";
import AllProducts from "../JSON/Phones.json"; // Adjust the path as needed
import { IoMdHeartEmpty } from "react-icons/io";
import { GrDeliver } from "react-icons/gr";
import { CartContext } from "../Context/CartContext";


const ProductPage = () => {
  const {addToCart} = useContext(CartContext);
  const { id } = useParams();
  const product1 = Products.find((p) => p.id === parseInt(id));

  const productCategory = Object.keys(AllProducts).find((category) =>
    AllProducts[category].some((product) => product.id === id)
  );

  const product2 = productCategory
    ? AllProducts[productCategory].find((product) => product.id === id)
    : null;

  const product = product1 || product2;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-16">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 p-4">
          <img className="w-96" src={product?.image} alt="Product Image" />
        </div>
        <div className=" w-full sm:w-1/2 flex flex-col gap-4 font-poppins">
          <h1 className="text-3xl">{product?.model || product?.productName}</h1>
          <h2 className="text-green-600">In stock</h2>
          <h3 className="text-2xl">$ {product?.price}</h3>
          <p>{product?.description || "Description not available"}</p>
          <hr />

          <di
            v
            className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between"
          >
            <div className="flex justify-center">
              <button className="border p-3 sm:p-0 w-2/6 sm:w-8 rounded-l-md">
                -
              </button>
              <p className="border w-16 flex justify-center place-items-center rounded-sm">
                2
              </p>
              <button className="border w-2/6 sm:w-8 rounded-r-lg bg-[#DB4444] text-white">
                +
              </button>
            </div>

            <button onClick={() => addToCart(product)} className="bg-[#DB4444] w-full p-4 sm:p-2 sm:w-48 rounded-md text-white">
              Add to Cart
            </button>

            <div className="border border-black p-3 sm:p-0 rounded-xl w-full sm:w-12 flex items-center justify-center cursor-pointer">
              <IoMdHeartEmpty size={35} />
            </div>
          </di>

          <div className="border border-black flex items-center justify-around p-3 gap-4">
            <GrDeliver size={35} />
            <div className="flex flex-col gap-3">
              <h5 className="text-xl">Free Delivery</h5>
              <p className="underline text-sm">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
