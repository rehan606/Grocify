import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaShieldAlt, FaTree } from 'react-icons/fa';
import { PiPlantFill } from 'react-icons/pi';
import ValuesImage from '../../assets/images/basket-full-vegetables.png';


const ValuesData = [
    {
        id: 1,
        icon: <FaHeart />,
        title: "Quality",
        description: "We are committed to providing the highest quality products and services."
    },
    {
        id: 2,
        icon: <FaLeaf />,
        title: "Freshness",
        description: "Our products are sourced fresh to ensure the best taste and nutritional value."
    },
    {
        id: 3,
        icon: <FaShieldAlt />,
        title: "Food Safety",
        description: "We prioritize food safety and adhere to strict standards to protect our customers."
    },
    {
        id: 4,
        icon: <PiPlantFill />,
        title: "100% Organic",
        description: "We ensure that all our products are certified organic, free from harmful pesticides and chemicals."
    }
];

const Values = () => {
  return (
    <section className='max-w-1400 mx-auto px-10 bg-white py-10 '>      
        <div>
            <Heading title="Our" content="Values" />

            <div className='flex items-center justify-between mt-8 lg:mt-6 lg:mb-14 md:gap-6 lg:gap-4 flex-col md:flex-row'>
                {/* Left values */}
                <div className=' w-full lg:w-1/3 '>
                    {ValuesData.slice(0, 2).map((value) => (
                        <div key={value.id} className='flex items-center border border-gray-200 p-4 shadow-md lg:border-0 lg:shadow-none rounded-lg mt-6 lg:mt-20 md:flex-row-reverse md:text-right min-h-36 md:min-h-40 lg:min-h-36'>
                            <div className='md:ml-4 mr-4 md:mr-0'>
                               <span className='flex items-center justify-center text-3xl bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full text-white'>{value.icon}</span> 
                            </div>
                            <div>
                                <h3 className='font-bold text-lg md:text-3xl text-zinc-800'>{value.title}</h3>
                                <p className='text-zinc-600 mt-2'>{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Middle image */}
                <div className='w-full lg:w-1/3 hidden lg:block p-6 mt-8'>
                    <img src={ValuesImage} alt="Values image" />
                </div>

                {/* Right values */}
                <div className='w-full lg:w-1/3  '>
                    {ValuesData.slice(2, 4).map((value) => (
                        <div key={value.id} className='flex items-center  p-4  rounded-lg mt-6 lg:mt-20   min-h-36 md:min-h-40 lg:min-h-36 border border-gray-200 shadow-md lg:border-0 lg:shadow-none'>
                            <div className='mr-4 '>
                               <span className='flex items-center justify-center text-3xl bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full text-white'>{value.icon}</span> 
                            </div>
                            <div>
                                <h3 className='font-bold text-lg md:text-3xl text-zinc-800'>{value.title}</h3>
                                <p className='text-zinc-600 mt-2'>{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
  )
}

export default Values
