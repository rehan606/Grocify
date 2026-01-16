import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCategoryImage from '../../assets/images/fruits-and-veggies.webp'
import DairyCategoryImage from '../../assets/images/dairy-and-eggs.webp'
import VegetablesCategoryImage from '../../assets/images/meat-and-seafood.webp'
import { Link } from 'react-router-dom'

// Category Array (You can expand this as needed)
const categories = [
    { 
        id: 1, 
        name: "Fruits & Veggies", 
        description: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crispy vegetables.", 
        image: FruitsCategoryImage, 
        path: "/fruits"
    },
    { 
        id: 2, 
        name: "Dairy & Eggs",
        description: "Awesome dairy products including milk, cheese, yogurt, and farm-fresh eggs to keep your family healthy and happy.", 
        image: DairyCategoryImage, 
        path: "/dairy"
    },
    { 
        id: 3, 
        name: "Meat & Seafood", 
        description: "Fresh meat and seafood sourced from trusted farms and fisheries. High-quality cuts of beef, chicken, pork, and a variety of fish and shellfish.", 
        image: VegetablesCategoryImage, 
        path: "/seafood"
    },
];

const Category = () => {
    return (
        <section>
            <div className='py-10 lg:py-16'>
               <Heading title="Shop" content="by Category" />

               {/* Category Grid */}
                <div className='max-w-1400 mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 '>
                    {categories.map((category) => (
                        <div key={category.id} className=' rounded-xl overflow-hidden md:p-4'>
                            {/* Card Image */}
                            <div className='w-full min-h-[30vh] -mb-10 relative '>
                                <img src={category.image} alt={category.name} className='absolute bottom-0' />
                            </div>

                            {/* Card Content */}
                            <div className=' p-6 bg-zinc-100 rounded-xl w-full min-h-[42vh]'>
                                <h3 className='text-xl text-zinc-800 font-bold mb-2 pt-10'>{category.name}</h3>
                                <p className='text-zinc-600 mt-3 mb-7'>{category.description}</p>
                                
                                <Link to={category.path} className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition text-white">Shop Now</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section> 
    )
}

export default Category