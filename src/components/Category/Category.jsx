import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCategoryImage from '../../assets/images/fruits-and-veggies.png'
import DairyCategoryImage from '../../assets/images/dairy-and-eggs.png'
import VegetablesCategoryImage from '../../assets/images/meat-and-seafood.png'
import Button from '../Button/Button'

// Category Array (You can expand this as needed)
const categories = [
    { 
        id: 1, 
        name: "Fruits & Veggies", 
        description: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crispy vegetables.", 
        image: FruitsCategoryImage, 
    },
    { 
        id: 2, 
        name: "Dairy & Eggs",
        description: "Awesome dairy products including milk, cheese, yogurt, and farm-fresh eggs to keep your family healthy and happy.", 
        image: DairyCategoryImage, 
    },
    { 
        id: 3, 
        name: "Meat & Seafood", 
        description: "Fresh meat and seafood sourced from trusted farms and fisheries. High-quality cuts of beef, chicken, pork, and a variety of fish and shellfish.", 
        image: VegetablesCategoryImage, 
    },
];

const Category = () => {
    return (
        <section>
            <div className='py-20'>
               <Heading title="Shop" content="by Category" />

               {/* Category Grid */}
                <div className='max-w-1400 mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mt-12 '>
                    {categories.map((category) => (
                        <div key={category.id} className=' rounded-xl overflow-hidden'>
                            {/* Card Image */}
                            <div className='w-full min-h-[30vh] -mb-10 relative'>
                                <img src={category.image} alt={category.name} className='absolute bottom-0' />
                            </div>

                            {/* Card Content */}
                            <div className='p-6 bg-zinc-100 rounded-xl'>
                                <h3 className='text-xl text-zinc-800 font-bold mb-2 pt-10'>{category.name}</h3>
                                <p className='text-zinc-600 mt-3 mb-7'>{category.description}</p>
                                <Button content="Shop Now" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section> 
    )
}

export default Category