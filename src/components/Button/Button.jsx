import React from 'react'

const Button = (props) => {
  return (
    <button className="bg-linear-to-r from-orange-400 to-orange-500 text-white text-md md:text-lg px-8 py-3 rounded-full  hover:bg-orange-100 transition-all duration-300 cursor-pointer hover:scale-105">
      {props.content} 
      </button>
  )
}

export default Button
