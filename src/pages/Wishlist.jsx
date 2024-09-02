import React, { useContext } from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { CartContext } from '../Context/CartContext';


const Wishlist = () => {

  const {favItems } = useContext(CartContext);

  return (
    <div className=''>

        <hr className='w-full border-[#b2b2b2] border-[0.01px]' />
        <div className='flex p-4 justify-between'>
            <h1 className=''>Wishlist (10)</h1>
            
            <button className='border border-black p-2 rounded-sm flex items-center gap-2'>
                <MdAddShoppingCart />
                Move all to Bag</button>
        </div>

        <hr className='w-full border-[#b2b2b2] border-[0.01px] mb-2' />

        {favItems.map((wish) => (
          <div>
            <img src= {wish.image} alt="" />
          </div>
        ))}
      
    </div>
  )
}

export default Wishlist
