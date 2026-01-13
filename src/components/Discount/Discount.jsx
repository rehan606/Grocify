import React from 'react'
import Button from '../Button/Button'
import DiscountBG from '../../assets/images/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-right bg-cover md:bg-contain bg-no-repeat' style={{backgroundImage: `url(${DiscountBG})`}}>
        <div className='max-w-1400 mx-auto md:py-10 px-10 py-10 flex md:flex-row flex-col md:items-center md:bg-transparent bg-zinc-100'>
            <span className=" text-5xl lg:text-8xl text-orange-600 font-bold transform md:-rotate-90 md:h-fit md:self-center mb-2">20%</span>
            <div className="w-full lg:max-w-3xl">
                <h3 className="text-4xl md:text-5xl lg:text-7xl text-zinc-800 font-bold">Discount First Order </h3>
                <p className="text-zinc-600 my-4 md:my-6 ">Enjoy an exclusive first order Get 20% discount on our Grocery website! Shop now and save big on your favorite products.</p>
                <Button content="Get a Discount" />
            </div>
        </div>
    </section>
  )
}

export default Discount
