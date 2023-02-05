import Image from 'next/image'
import React from 'react'
import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const CarouselComponent = (props) => {

    const images = [
        '/images/carousel/carousel-1.png',
        '/images/carousel/carousel-2.png',
    ]

    const zoomInProperties = {
        indicator: true,
        scale: 1.2,
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        prevArrow: (
            <div className='group-hover:-ml-3 w-7 h-7 rounded-full flex justify-center items-center group-hover:bg-navy bg-[#1f3c4246] duration-300'>
                <svg width={24} height={24} fill="none">
                    <path
                        d="M15 18l-6-6 6-6"
                        stroke="#fff"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        ),
        nextArrow: (
            <div className='group-hover:-mr-3 w-7 h-7 rounded-full flex justify-center items-center group-hover:bg-navy bg-[#1f3c4246] duration-300'>
                <svg width={24} height={24} fill="none" {...props}>
                    <path
                        d="M9 6l6 6-6 6"
                        stroke="#fff"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        )
    }

    return (
        <div className='group'>
            <Zoom {...zoomInProperties}>
                {images.map((each, index) => (
                    <div key={index} className='w-full h-40'>
                        <img src={each} alt="carousel" className='w-full h-40 object-cover rounded-lg shadow-md' />
                    </div>
                ))}
            </Zoom>
        </div>
    )
}

export default CarouselComponent