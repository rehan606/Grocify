import React from 'react'

const Heading = (props) => {
    return (
        <div>
            <div className='w-fit mx-auto'>
                <h2 className='text-center text-3xl md:text-4xl font-bold'> 
                    <span className='text-orange-500'>{props.title}</span> {props.content}
                </h2>
                <div className='w-20 md:w-34 h-1 bg-orange-500 mt-3 md:mt-5 ml-auto'></div>
            </div>
        </div>
    )
}

export default Heading
