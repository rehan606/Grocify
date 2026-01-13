import React from 'react'
import Button from '../Button/Button'
import DiscountBG from '../../assets/images/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-right bg-contain bg-no-repeat' style={{backgroundImage: `url(${DiscountBG})`}}>
        <div className='max-w-1400 mx-auto py-10 px-10 flex items-center'>
            <span className="text-8xl text-orange-500 font-bold transform -rotate-90 h-fit self-center">20%</span>
            <div className="max-w-3xl">
                <h3 className="text-7xl text-zinc-800 font-bold">First Order Discount</h3>
                <p className="text-zinc-600 my-6 ">Enjoy an exclusive first order Get 20% discount on our Grocery website! Shop now and save big on your favorite products.</p>
                <Button content="Get a Discount" />
            </div>
        </div>
    </section>
  )
}

export default Discount
