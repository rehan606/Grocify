import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductData from '../Data/ProductData';

// product category
const categories = [ 'All', 'Fruits', 'Vegetables', 'SeaFoods', 'Dairy', 'Meat' ];


const Products = () => {

    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <section className='max-w-1400 mx-auto px-10 md:pb-20'>
            <div>
                <Heading title="Our" content="Products" />

                <div>
                    {/* Product categories will go here */}
                    <div className='flex items-center justify-center gap-6 mt-8 flex-wrap'>
                        {categories.map((category, index) => (
                            <button 
                                key={index} 
                                className={`px-4 py-2  font-semibold border border-gray-300 rounded-full hover:bg-orange-500 hover:text-white transition duration-300 cursor-pointer

                                ${selectedCategory === category ? 'bg-linear-to-b from-orange-400 to-orange-500 text-white' : 'bg-white'}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button> 
                        ))}
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Products
