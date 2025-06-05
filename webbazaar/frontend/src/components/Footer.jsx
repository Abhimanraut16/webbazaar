import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Footer() {
  return (
    <div>

      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        <div className="">
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corporis iusto quae incidunt perferendis!</p>
        </div>
        <div className="">
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="">
          <p>GET IN TOUCH</p>
          <ul>
            <li>+977-9840404040</li>
            <li>info@gmail.com</li>
          </ul>
        </div>
      </div>


      <div className="">
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com -All Right</p>
      </div>
    </div>
  )
}

export default Footer