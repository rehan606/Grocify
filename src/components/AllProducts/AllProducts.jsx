import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgAll from '../../assets/images/all-banner.webp'

const AllProducts = () => {
  return (
    <div>
        <CategoryPage title="All " content='Products' subtitle='Our all grocery Products are here.' bgImage={BgAll} categories={['All']} />
    </div>
  )
}

export default AllProducts
