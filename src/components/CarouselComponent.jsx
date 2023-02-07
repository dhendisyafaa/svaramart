import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const CarouselComponent = () => {

    const images = [
        '/images/carousel/carousel-1.png',
        '/images/carousel/carousel-2.png',
    ]

    // const indicators = (index) => (<button className="indicator w-2 h-2">
    //     <style jsx>{`
    //         .indicator {
    //             cursor: pointer;
    //             margin-right: 5px;
    //             background-color: #8E8E8E;
    //             border-radius: 50%;
    //         }
            
    //         .indicator.active {
    //             color: #fff;
    //             background: #1F3C42;
    //         }
    //     `}</style>
    //     </button>);

    const slideProperties = {
        // indicators: true,
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        canSwipe: true,
        prevArrow: (
            <div className='group-hover:-ml-3 w-7 h-7 rounded-full flex justify-center items-center group-hover:bg-navy bg-[#90a3a734] duration-300'>
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
            <div className='group-hover:-mr-3 w-7 h-7 rounded-full flex justify-center items-center group-hover:bg-navy bg-[#90a3a734] duration-300'>
                <svg width={24} height={24} fill="none">
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
            {/* for indicators */}
            {/*  indicators={indicators} */}
            <Slide {...slideProperties}>
                {images.map((each, index) => (
                    <div key={index} className='w-full h-40'>
                        <img src={each} alt="carousel" className='w-full h-40 object-cover rounded-lg shadow-md' />
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default CarouselComponent