import React from 'react'
import Banner from '../Banner/Banner'
import ProductData from '../Data/ProductData';
import Cards from '../Cards/Cards';

const CategoryPage = ({ title, bgImage, categories=[] }) => {

    let filteredProducts = categories.includes('All') ? ProductData : ProductData.filter(product => categories.includes(product.category));

    return (
        <div className=''>
            <Banner title={title} bgImage={bgImage} />

            <div className='max-w-1400 mx-auto px-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-10'>
                {filteredProducts.map(product => (
                    <Cards 
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default CategoryPage
