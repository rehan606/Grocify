import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4 } from "react-icons/tb";
import { PiPlant, PiFactory } from 'react-icons/pi'
import { SlBadge } from 'react-icons/sl'
import { BsTruck } from 'react-icons/bs'

const steps = [
    {
        id: 1,
        number: <TbCircleNumber1 />,
        title: "Sourcing",
        description: "It is a long established fact that a reader",
        icon: <PiPlant/>
    },
    {
        id: 2,
        number: <TbCircleNumber2 />,
        title: "Menufacturing",
        description: "It is a long established fact that a reader",
        icon: <PiFactory />
    },
    {
        id: 3,
        number: <TbCircleNumber3 />,
        title: "Quality Control",
        description: "It is a long established fact that a reader",
        icon: <SlBadge />
    },
    {
        id: 4,
        number: <TbCircleNumber4 />,
        title: "Logistic",
        description: "It is a long established fact that a reader",
        icon: <BsTruck />
    }
];

const Process = () => {
    return (
        <section className='max-w-1400 mx-auto px-10 py-10  md:py-20'>
            <div>
                <div className='w-fit mb-10 ml-0'>
                    <Heading title="Our" content="Process"/>
                </div>



                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:pt-56'>
                    
                    {steps.map((step) => (
                        <div key={step.id} 
                            className={`flex flex-col items-center text-center p-5  rounded-lg  shadow-lg lg:shadow-none transition-shadow duration-300 
                             ${step.id % 2 === 0 ? 'lg:-mt-46' : ''} `}>

                            {/* Number  */}
                            <span className="w-10 h-10 md:w-14 md:h-14 text-6xl rounded-full outline-1 outline-offset-1 outline-dashed flex items-center justify-center  text-zinc-700 ">{step.number}</span>

                            {/* Content */}
                            <div className='mt-5 flex  items-center gap-3 '>
                                <span className='bg-linear-to-b from-orange-400 to-orange-500 p-2 rounded-full text-2xl md:text-3xl text-white'>{step.icon}</span>
                                
                                <div className='text-left'>
                                    <h3 className='text-xl md:text-2xl font-semibold text-zinc-800 mb-2'>{step.title}</h3>
                                    <p className="text-zinc-500">{step.description}</p>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process;
