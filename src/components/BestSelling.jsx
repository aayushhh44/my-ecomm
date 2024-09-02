import React from 'react'
import BestSellingCategories from './BestSellingCategories'



const BestSelling = () => {
  return (
    <div className='p-16'>
    <div className='flex gap-2 items-center mb-2'>
       <div className='bg-[#DB4444] rounded-sm h-8 w-4'></div>
       <p className='font-poppins'>Categories</p>
   </div>

   <div className='flex justify-between mb-8'>
       <h2 className='text-3xl'>Best Selling Products</h2>
        <button className='bg-[#DB4444] px-4 py-2 text-white'>View All</button>
   </div>

   <BestSellingCategories />    

   
</div>  
  )
}

export default BestSelling
