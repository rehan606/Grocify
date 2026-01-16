import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules'; 


import Heading from '../Heading/Heading'
import { IoIosArrowForward , IoIosArrowBack} from 'react-icons/io'


import Customer1 from '../../assets/images/customer1.webp'
import Customer2 from '../../assets/images/customer2.webp'
import Customer3 from '../../assets/images/customer3.webp'
import Customer4 from '../../assets/images/customer4.webp'
import Customer5 from '../../assets/images/customer5.webp'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from 'react-icons/fa';





// Review object structure

const reviews = [
    {
        id: 1,
        name: "Rehan Khan",
        profession: "Web Developer",
        rating: 5,
        content: " Fantastic product! Highly recommend to everyone looking for quality and reliability. very satisfied with my purchase. ",
        image: Customer2,
    },
    {
        id: 2,
        name: "Rabina Rabi",
        profession: "Food Blogger",
        rating: 4,
        content: " Amazing product! Exceeded my expectations in every way. love it! and will recommend to my friends and family. this is a must-have! ",
        image: Customer5,
    },
    {
        id: 3,
        name: "Alice Johnson",
        profession: "Fitness Trainer",
        rating: 5,
        content: " Exceptional quality and fantastic customer support! and I am extremely satisfied with my purchase. thank you! ",
        image: Customer3,
    },
    {
        id: 4,
        name: "Bob Wilson",
        profession: "Model",
        rating: 5,
        content: " Good Product and Excellent Service. Highly recommend to everyone! ",
        image: Customer4,
    },
    {
        id: 5,
        name: "Charlie Brown",
        profession: "Chef",
        rating: 5,
        content: " Outstanding product and service! Will definitely be ordering again. Highly recommended! ",
        image: Customer1 ,
    }
]

const Testimonials = () => {
    return (
        <section className='max-w-1400 mx-auto px-10  lg:py-16'>
            <div className=''>
                <Heading title="Customers" content="Saying" />

                 {/* Testimonial Slide Button  */}
                <div className='flex justify-end gap-3 mt-4 lg:mt-10  '>
                    <button className='custom-prev text-2xl rounded-lg w-11 h-11 bg-zinc-100 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 group flex items-center justify-center cursor-pointer'>
                        <IoIosArrowBack className='text-3xl text-zinc-700 group-hover:text-white transition-colors duration-300' />
                    </button>
                    <button className='custom-next text-2xl rounded-lg w-11 h-11 bg-zinc-100 hover:bg-linear-to-b hover:from-orange-400 hover:to-orange-500 group flex items-center justify-center cursor-pointer'>
                        <IoIosArrowForward className='text-3xl text-zinc-700 group-hover:text-white transition-colors duration-300' />
                    </button>
                </div>

                {/* Testimonial Slide  */}
                
                <Swiper
                    // navigation={true} 
                    navigation={{
                        nextEl: '.custom-next', // Custom next button
                        prevEl: '.custom-prev', // Custom prev button
                    }} 
                    loop={true}
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    
                    breakpoints={{
                        640: {slidesPerView: 1, spaceBetween: 20},
                        768: {slidesPerView: 2, spaceBetween: 20},
                        1040: {slidesPerView: 3, spaceBetween: 20},
                    }}
                    modules={[Navigation]} className="mySwiper">
                    {reviews.map(review => (
                        <SwiperSlide SwiperSlide key={review.id} className='mt-4 lg:mt-10 mb-10 bg-zinc-100 p-4 md:p-10 rounded-lg shadow-lg mx-auto'>
                            <div className='flex items-center gap-5 mb-5'>
                                <div className='w-14 h-14 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-2'>
                                    <img src={review.image} alt={review.name} className='w-full h-full object-cover rounded-full' />    
                                </div>

                                
                                <div>
                                    <h5 className='text-xl text-zinc-800 font-bold'>{review.name}</h5>
                                    <p className='text-zinc-600 italic'>{review.profession}</p>
                                    <span className='flex mt-2 gap-1'>
                                        {Array.from({length: review.rating}, (_, index) => (
                                            <FaStar key={index} className='text-orange-500 '/>
                                        ))}
                                    </span>
                                </div>
                            </div>

                            
                            <div className='ml-auto min-h-[15vh]'>
                                <p className='text-zinc-600 italic'>{review.content}</p>
                            </div>
                        </SwiperSlide>                      
                    ))}
                </Swiper>
                
                
            </div>
        </section>
    )
}

export default Testimonials