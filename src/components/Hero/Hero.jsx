import React from 'react'
import Grocery from '../../assets/images/grocery.png'

const Hero = () => {
  return (
    // <div className="bg-linear-to-r from-orange-400 to-orange-500 h-[86vh] flex items-center justify-center">
    //     <div className="text-center text-white">
    //         <h1 className="text-5xl font-bold mb-4">Welcome to Grocify</h1>
    //         <p className="text-xl mb-8">Your one-stop shop for all grocery needs</p>
    //         <button className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-100 transition">Shop Now</button>
    //     </div>
    // </div>

    <section>
        <div className='max-w-7xl mx-auto px-10 flex items-center justify-between h-[86vh]'>
            {/* Hero Content */}
            <div className="w-1/2 ">
                <span className='bg-orange-100 text-orange-500 text-lg rounded-full px-4 py-2'>Export Best Quality...</span>
                <h1 className="text-7xl font-bold mb-4">Tasty Organic <span className="text-orange-500">Fruits</span> & <span className="text-orange-500">Veggies</span> in your City</h1>

                <p className="text-xl text-zink-600 mb-8">Bred for a high-quality experience. Your one-stop shop for all grocery needs.</p>
                <button className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-100 transition">Shop Now</button>
            </div>

            {/* Hero Image  */}
            <div className="w-1/2">
                 <div className="">
                    <img src={Grocery} alt="Hero Image" className="h-full w-full object-cover rounded-lg"/>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default Hero