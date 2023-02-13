import Image from 'next/image'
import starRating from '../../public/images/icon/star-rating.png'
import photoProduct from '../../public/images/product/img-product.png'

const ReviewComponent = () => {
    return (
        <div className='shadow-md p-3 rounded-lg mb-3'>
            <Image src={starRating} alt="star rating" width={80}/>
            <p className='text-[10px] leading-3 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis natus ea earum unde iusto laborum accusamus ratione aspernatur mollitia.</p>
            <div className='flex gap-1 mt-2'>
                <Image src={photoProduct} alt="photo product buyer" width={40} height={40} className='rounded-lg' />
                <Image src={photoProduct} alt="photo product buyer" width={40} height={40} className='rounded-lg' />
            </div>
            <div className='flex items-center justify-end gap-2'>
                <p className='font-semibold text-sm text-grey'>1</p>
                <svg width={15} height={15} fill="none">
                    <g clipPath="url(#prefix__clip0_156_1076)">
                        <path
                            d="M4.375 6.875l2.5-5.625A1.875 1.875 0 018.75 3.125v2.5h3.537a1.25 1.25 0 011.25 1.438l-.862 5.625a1.25 1.25 0 01-1.25 1.062h-7.05m0-6.875v6.875m0-6.875H2.5a1.25 1.25 0 00-1.25 1.25V12.5a1.25 1.25 0 001.25 1.25h1.875"
                            stroke="#8E8E8E"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="prefix__clip0_156_1076">
                            <path fill="#fff" d="M0 0h15v15H0z" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default ReviewComponent