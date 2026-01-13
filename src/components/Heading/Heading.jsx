import React from 'react'

const Heading = (props) => {
    return (
        <div>
            <div className='w-fit mx-auto'>
                <h2 className='text-zinc-800 text-center text-3xl md:text-4xl font-bold'> 
                    <span className='text-orange-500'>{props.title}</span> {props.content}
                </h2>
                <div className='w-16 md:w-24 h-1 bg-orange-500 mt-2 md:mt-3 ml-auto'></div>
            </div>
        </div>
    )
}

export default Heading
