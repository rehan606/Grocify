import React from 'react'

const Banner = ({title, bgImage}) => {
  return (
    <div className='h-[50vh] mt-20 flex items-center justify-center bg-center bg-cover relative' 
        style={{backgroundImage:`url(${bgImage})`}} >
        <h2 className="text-2xl md:text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10">{title}</h2>
        <div className="absolute inset-0 bg-black/50 "></div>
    </div>
  )
}
 
export default Banner
