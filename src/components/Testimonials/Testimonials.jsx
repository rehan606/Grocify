import React from 'react'
import Heading from '../Heading/Heading'
import { IoIosArrowForward , IoIosArrowBack} from 'react-icons/io'

const Testimonials = () => {
    return (
        <section className='max-w-1400 mx-auto px-10 py-20 md:py-20'>
            <div>
                <Heading title="Customers" content="Saying" />

                 {/* Testimonial Slide Button  */}
                <div className='flex justify-end gap-3 mt-10'>
                    <button className='text-2xl rounded-lg w-11 h-11 bg-zinc-100 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 group flex items-center justify-center cursor-pointer'>
                        <IoIosArrowBack className='text-3xl text-zinc-700 group-hover:text-white transition-colors duration-300' />
                    </button>
                    <button className='text-2xl rounded-lg w-11 h-11 bg-zinc-100 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 group flex items-center justify-center cursor-pointer'>
                        <IoIosArrowForward className='text-3xl text-zinc-700 group-hover:text-white transition-colors duration-300' />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials