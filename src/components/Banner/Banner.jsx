import React from 'react'
import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Banner = ({title, content, subtitle }) => {
  return (
    // <div className='h-[50vh] mt-20 flex items-center justify-center bg-center bg-cover relative' 
    //     style={{backgroundImage:`url(${bgImage})`}} >
    //     <h2 className="text-2xl md:text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10">{title}</h2>
    //     <div className="absolute inset-0 bg-black/50 "></div>
    // </div>

      <section className="bg-linear-to-r from-orange-900 to-zinc-800 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title} <span className="text-orange-500">{content}</span>
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
            <Link to={'/'} className="flex items-center justify-center gap-4 cursor-pointer mt-6 text-md hover:text-orange-500 font-bold" > 
            <TiArrowBackOutline /> <h3>Back to Home</h3> 
            </Link>
            
        </div>
      </section> 
  )
}
 
export default Banner
