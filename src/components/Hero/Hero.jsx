import React from 'react'
import Grocery from '../../assets/images/grocery.webp'
import Button from '../Button/Button'

const Hero = () => {
  return (

    <section>
        <div className='max-w-1400 mx-auto px-10 flex md:flex-row flex-col  items-center justify-between pt-25 min-h-screen'>
            {/* Hero Content */}
            <div className="flex-1 ">
                <span className='bg-orange-100 text-orange-500 text-lg rounded-full px-4 py-2'>Export Best Quality...</span>
                <h1 className="text-4xl/10 lg:text-7xl/20 font-bold mt-4 mb-4">Tasty Organic <span className="text-orange-500">Fruits</span> & <span className="text-orange-500">Veggies</span> <br /> in your City</h1>

                <p className="text-md md:text-xl text-zink-600 mt-5 mb-8 max-w-132.5">Bred for a high-quality experience. Your one-stop shop for all grocery needs.</p>

                <Button content="Shop Now" />
            </div>

            {/* Hero Image  */}
            <div className="flex-1">
                 <div className="">
                    <img src={Grocery} alt="Hero Image" className="h-full w-full object-cover rounded-lg"/>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default Hero