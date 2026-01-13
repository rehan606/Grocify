import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Card = () => {
    return (
        <div>
            {/* Top icon and button */}
            <div className='flex items-center justify-between'>
                <span> <FaHeart /> </span>
                <button> <FaPlus/> </button>
            </div>
            {/* image */}
            <div>
                <img src="" alt="" />
            </div>
            {/* product details */}
            <div>
                <h3>Product Name</h3>
                <p>$0.00</p>
                <Button content="Shop Now" />
            </div>
        </div>
    )
}

export default Card
