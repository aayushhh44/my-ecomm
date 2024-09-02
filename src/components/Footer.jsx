import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full flex gap-4 md:flex-row p-16 flex-col bg-black text-white'>
        <div className='w-full sm:w-1/5 flex flex-col gap-2'>
            <h2>Aayush Store</h2>
            <h4 className='mt-4 text-md'>Subscribe</h4>
            <p className='text-sm'>Get 10% off your first order</p>

            <input className='border border-white bg-black p-1' type='text' placeholder='Enter your email' />

        </div>

        <div className='w-full sm:w-1/5 flex flex-col gap-2'>
            <h2>Support</h2>

            <p className='mt-4 text-sm'>MilanChowk, Kathmandu, Nepal</p>
            <p className='text-sm'>aayushpoudel59@gmail.com</p>
            <p className='text-sm'>+977 9843249388</p>

        </div>


        <div className='w-full sm:w-1/5 flex flex-col gap-2'>
            <h2>Account</h2>
            <Link className='mt-4 text-sm'>My Account</Link>
            <Link className='mt-4 text-sm'>Login / Register</Link>
            <Link className='mt-4 text-sm'>Cart</Link>
            <Link className='mt-4 text-sm'>Wishlist</Link>
            <Link className='mt-4 text-sm'>Shop</Link>

        </div>

        <div className='w-full sm:w-1/5 flex flex-col gap-2'>
            <h2>Quick Link</h2>
            <Link className='mt-4'>Privacy Policy</Link>
            <Link>Terms of Use</Link>
            <Link>FAQ</Link>
            <Link>Contact</Link>

        </div>

        <div className='w-full sm:w-1/5 flex flex-col gap-2'>
            <h2>Download App</h2>
            <p className='mt-4 text-sm'>Save $4 with App New User Only</p>
            <div className='flex gap-2'>
                <img className='w-24' src='https://quickchart.io/qr?text=BarcodesInc&size=200' />
                <div className='flex gap-2 flex-col'>
                    <p className='text-sm'>Get it on google play</p>
                    <p className='text-sm text-nowrap'>Download on the App Store</p>

                </div>
            </div>
            <div className='flex gap-4 mt-6'>
                <FaFacebook size={35}/>
                <FaX size={35} />
                <FaInstagram size={35} />
                <FaLinkedin size={35} />
            </div>

        </div>
      
    </div>
  )
}

export default Footer
