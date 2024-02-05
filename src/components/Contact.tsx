import React, { useState } from 'react'
import { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className='bg-[#2596be] text-white'>
        <h1 className='text-4xl font-[poppins] font-bold p-8 px-20 bg-[#154c60]'>Contact US</h1>

        <div className='flex justify-evenly items-center w-full border-2 p-8'>
          <div>
            <div className='h-80 w-80 rounded-full overflow-hidden border-2 border-black shadow  shadow-slate-500'>  
            <iframe
        title="Google Map"
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE_LONGITUDE!2dYOUR_LONGITUDE!2dYOUR_LATITUDE!3dYOUR_ZOOM_LEVEL!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zYOUR_LATITUDE!3dYOUR_LONGITUDE!5e0!3m2!1sen!2sus!4vYOUR_MAP_API_KEY"
        width="600"
        height="450"
        style={{ border: '0' }}
        loading="lazy"
      ></iframe>    
            </div>
            <h1 className='text-center text-4xl font-[serif] mt-4'>Location 1</h1>
            <div className='py-4 flex justify-between ml-6'>
              <FaLocationDot className='mr-3 mt-1' />
              <p className='font-sans leading-7'>DELTA TOOLING SOLUTION <br />305,Camps Corner, Makarpura Main Road, <br />Susan Circle, Vadodara 390010</p>
            </div>
          </div>
          <div className='border border-black h-80'></div>
          <div>
            <div className='h-80 w-80 rounded-full overflow-hidden border-2 border-black shadow shadow-slate-500'>        <iframe
        title="Google Map"
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE_LONGITUDE!2dYOUR_LONGITUDE!2dYOUR_LATITUDE!3dYOUR_ZOOM_LEVEL!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zYOUR_LATITUDE!3dYOUR_LONGITUDE!5e0!3m2!1sen!2sus!4vYOUR_MAP_API_KEY"
        width="600"
        height="450"
        style={{ border: '0' }}
        loading="lazy"
      ></iframe>   

            </div>
            <h1 className='text-center text-4xl font-[serif] mt-4'>Location 2</h1>
            <div className='py-4 flex justify-between ml-6'>
              <FaLocationDot className='mr-3 mt-1' />
              <p className='font-sans leading-7'>DELTA TOOLING SOLUTION <br />305,Camps Corner, Makarpura Main Road, <br />Susan Circle, Vadodara 390010</p>
            </div>
          </div>
        </div>

        <div className='flex items-center p-4 bg-[#154c60]'>
          <div className='w-[50%]'>
            <div className='flex justify-center items-center'>
              <MdEmail size={23} />
              <p className='ml-4 text-xl'>esmailb@deltatootings.com</p>
            </div>
            <div className='flex justify-center items-center mt-3 mr-[84px]'>
              <FaPhoneAlt size={20} />
              <p className='ml-4 text-xl'>+91-9727710187</p>
            </div>
          </div>
          <div className='w-[50%]'>
            <div className='flex justify-center items-center'>
              <BsFacebook size={30} className='cursor-pointer' />
              <AiFillTwitterCircle size={35} className='ml-3 cursor-pointer' />
              <BsGlobe size={30} className='ml-3 cursor-pointer' />
            </div>
          </div>
        </div>
        <p className='text-center text-sm py-4 bg-[#154c60]'> © 2019 Delta Tooling Solution, All rights reserved.Design By Sol Inc.</p>
      </div>

    </>
  )
}

export default Contact
