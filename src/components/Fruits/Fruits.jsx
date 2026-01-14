import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgFruits from '../../assets/images/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
        <CategoryPage title="Fruits & Veggies" bgImage={BgFruits} />
    </div>
  )
}

export default Fruits
