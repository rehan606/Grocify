import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'

const SeaFood = () => {
  return (
    <div>
      <CategoryPage title="Meat & " content='Seafoods' subtitle='Fresh Meat and Seafoods' categories={['SeaFoods', 'Meat']}/>
    </div>
  )
}

export default SeaFood
