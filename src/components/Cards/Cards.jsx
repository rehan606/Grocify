import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Cards = ({ image, name, price}) => {
    return (
        <div className='bg-zinc-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 '>
            {/* Top icon and button */}
            <div className='flex items-center justify-between'>
                <span className='text-3xl text-zinc-300'> <FaHeart /> </span>
                <button className='bg-linear-to-b from-orange-400 to-orange-500 px-4 py-2 rounded-md  text-white cursor-pointer'> <FaPlus/> </button>
            </div>
            {/* image */}
            <div className="w-full h-50 mx-auto my-4 flex justify-center items-center rounded-lg p-4">
                <img src={image} alt={name} className="w-full h-full  " />
            </div>
            {/* product details */}
            <div className='text-center'>
                <h3 className='text-lg md:text-2xl font-semibold text-zinc-800'>{name}</h3>
                <p className="text-md md:text-xl font-bold mt-3 mb-3 "> ${Number(price ?? 0).toFixed(2)}</p>
                <Button content="Shop Now" />
            </div>
        </div>
    )
}

export default Cards
