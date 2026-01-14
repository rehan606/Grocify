import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeaFood from '../../assets/images/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
      <CategoryPage title="Meat & SeaFood" bgImage={BgSeaFood} categories={['SeaFoods', 'Meat']}/>
    </div>
  )
}

export default SeaFood
