import React from 'react'

const Banner = (props) => {
  return (
    <div className='bg-zinc-400 h-[50vh] mt-20 flex items-center justify-center'>
        <h2 className="text-2xl md:text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold ">{props.content}</h2>
    </div>
  )
}
 
export default Banner
