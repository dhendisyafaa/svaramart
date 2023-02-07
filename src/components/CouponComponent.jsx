import React from 'react'
import makeover from '../../public/images/icon/makeover.png'
import Image from 'next/image'

const CouponComponent = () => {
    return (
        <div className='w-[90vw] flex gap-4 py-4 px-8 rounded-xl relative border-b-4 border-t-4'>
            <div className='shadow-[0px_0px_1px_0px_gray] w-8 h-8 absolute top-9' style={{borderRadius: '0 150px 150px 0', left: '-15px'}}></div>
            <div className='shadow-[0px_0px_1px_0px_gray] w-8 h-8 absolute  top-9' style={{borderRadius: '150px 0 0 150px', right: '-15px' }}></div>
            <div className="">
                <Image src={makeover} alt="voucher-icon-shop" width={70} height={70} />
            </div>
            <div className='border-l-grey border border-dashed'></div>
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                    <svg width={10} height={10} fill="none">
                        <g
                            clipPath="url(#prefix__clip0_46_1445)"
                            stroke="#1F3C42"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M8.75 4.167C8.75 7.083 5 9.583 5 9.583s-3.75-2.5-3.75-5.416a3.75 3.75 0 017.5 0z" />
                            <path d="M5 5.417a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" />
                        </g>
                        <defs>
                            <clipPath id="prefix__clip0_46_1445">
                                <path fill="#fff" d="M0 0h10v10H0z" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className='font-bold text-[10px]'>Make Over Official Store</p>
                </div>
                <div className="">
                    <p className='text-grey font-medium text-[10px] -mb-1'>Gratis Ongkir</p>
                    <p className='font-bold text-md'>Rp10.000</p>
                </div>
                <div className="valid">
                    <p className='text-grey font-medium text-[10px]'>Valid until 03 October 2023</p>                  
                </div>
            </div>
        </div>
    )
}

export default CouponComponent