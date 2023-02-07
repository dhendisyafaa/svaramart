import React from 'react'

const CouponComponent = () => {
    return (
        <div className='w-[50vh] flex gap-4 py-4 px-8 rounded-xl relative border-b-4 border-t-4'>
            <div className='shadow-[0px_0px_1px_0px_gray] w-8 h-8 absolute top-9' style={{borderRadius: '0 150px 150px 0', left: '-15px'}}></div>
            <div className='shadow-[0px_0px_1px_0px_gray] w-8 h-8 absolute  top-9' style={{borderRadius: '150px 0 0 150px', right: '-15px' }}></div>
            <div className="">
                <img src="data:image/png;base64,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" alt="" className='w-[70px] h-[70px]' />
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