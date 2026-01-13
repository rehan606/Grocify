import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductData from '../Data/ProductData';
import Cards from '../Cards/Cards';
import Button from '../Button/Button';




const Products = () => {
    // product category
    const categories = [ 'All', 'Fruits', 'Vegetables', 'SeaFoods', 'Dairy', 'Meat' ];
    const [selectedCategory, setSelectedCategory] = useState('All');

    let filteredProducts = selectedCategory === 'All' ? ProductData : ProductData.filter(product => product.category === selectedCategory);

    const renderCards = filteredProducts.slice(0, 8).map(product => {
         
            return (
                <Cards image={product.image} name={product.name} price={product.price} />
            );
    });

    return (
        <section className='max-w-1400 mx-auto px-10 mb-10 md:mb-none lg:pb-10'>
            <div>
                <Heading title="Our" content="Products" />

                <div>
                    {/* Product categories */}
                    <div className='flex items-center justify-center gap-4 mt-8 flex-wrap'>
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

                    {/* Products grid */}
                        
                    <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 '>
                        {renderCards}
                    </div>

                    <div className=" flex items-center justify-center mt-15">
                        <Button content="View All" />  
                    </div>
                    
                </div> 
            </div>
        </section> 
    )
}

export default Products;
