import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'

const Fruits = () => {
  return (
    <div>
        <CategoryPage title="Fruits & " content='Veggies' subtitle='Fresh Food and Vagitables ' categories={['Fruits', 'Vegetables']}/>
    </div>
  )
}

export default Fruits
