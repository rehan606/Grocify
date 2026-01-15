import React from 'react'

const Button = (props) => {
  return (
    <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition text-white">
      {props.content} 
      </button>
  )
}

export default Button
