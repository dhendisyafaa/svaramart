import { Menu } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'
import photoProduct from '../../../public/images/product/img-product.png'
import Link from 'next/link'

const CardPromo = () => {
    return (
        <div className='relative w-fit lg:w-[15vw] shadow lg:shadow-md rounded-lg'>
            <div>
                <img
                    src={photoProduct}
                    width={36}
                    height={36}
                    alt='photo-product'
                    className='w-36 h-36 lg:w-50 lg:h-50 rounded-t-lg'
                />
                <div className='bg-navy rounded-br-lg pl-2 py-[2px]'>
                    <p className='font-bold text-[8px] text-white'>40% off</p>
                </div>
            </div>
            <div className='py-[10px] px-2 w-36 flex flex-col gap-5'>
                <div className='flex flex-col'>
                    <div className='mb-1'>
                        <p className='text-[10px] leading-3'>Navy Club Tas Ransel Kasual EBJ - Tas Pria Backpack</p>
                    </div>
                    <p className='font-bold text-xs'>Rp. 309.000</p>
                    <p className='font-medium text-[10px] text-grey text-decoration-line: line-through'>Rp. 309.000</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-1'>
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
                        <p className='text-[10px] text-grey'>Jakarta Timur</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <svg width={15} height={15} fill="none">
                            <path fill="url(#prefix__pattern0)" d="M0 0h15v15H0z" />
                            <defs>
                                <pattern
                                    id="prefix__pattern0"
                                    patternContentUnits="objectBoundingBox"
                                    width={1}
                                    height={1}
                                >
                                    <use xlinkHref="#prefix__image0_17_93" transform="scale(.00781)" />
                                </pattern>
                                <image
                                    id="prefix__image0_17_93"
                                    width={128}
                                    height={128}
                                    xlinkHref="data:image/png;base64,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"
                                />
                            </defs>
                        </svg>
                        <p className='text-[10px] text-grey'>4.9</p>
                        <span className='text-[10px] text-grey'>|</span>
                        <p className='text-[10px] text-grey'>Terjual 15rb</p>
                    </div>
                </div>
                <Menu>
                    <Menu.Button className="absolute bottom-2 right-2">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 8.125C7.84518 8.125 8.125 7.84518 8.125 7.5C8.125 7.15482 7.84518 6.875 7.5 6.875C7.15482 6.875 6.875 7.15482 6.875 7.5C6.875 7.84518 7.15482 8.125 7.5 8.125Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.875 8.125C12.2202 8.125 12.5 7.84518 12.5 7.5C12.5 7.15482 12.2202 6.875 11.875 6.875C11.5298 6.875 11.25 7.15482 11.25 7.5C11.25 7.84518 11.5298 8.125 11.875 8.125Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.125 8.125C3.47018 8.125 3.75 7.84518 3.75 7.5C3.75 7.15482 3.47018 6.875 3.125 6.875C2.77982 6.875 2.5 7.15482 2.5 7.5C2.5 7.84518 2.77982 8.125 3.125 8.125Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Menu.Button>
                    <Menu.Items className="bg-white rounded-t-xl fixed bottom-0 z-50 left-0 w-full h-[20%] border flex flex-col gap-3 px-3 py-6 font-light text-xs shadow-[2px_0px_20px_0px_rgba(0,0,0,0.25)]">
                        <div className="border rounded-full border-navy" ></div>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={`${active && 'text-gray-400'}`}
                                    href="/wishlist"
                                >
                                    Masukkan Wishlist
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={`${active && 'text-gray-400 '}`}
                                    href="serupa"
                                >
                                    Produk Serupa
                                </Link>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
            </div>
        </div>
        // <div className='w-fit lg:w-[15vw] shadow lg:shadow-md rounded-lg'>
        //     <div>
        //         <Image
        //             src={photoProduct}
        //             className='w-36 h-36 lg:w-full lg:h-full rounded-t-lg'
        //         />
        //         <div className='bg-navy rounded-br-lg pl-2 py-[2px]'>
        //             <p className='font-bold text-[8px] text-white'>40% off</p>
        //         </div>
        //     </div>
        //     <div className='py-[10px] px-2 w-36 flex flex-col gap-5 relative'>
        //         <div className='flex flex-col'>
        //             <div className='mb-1'>
        //                 <p className='text-[10px] leading-3'>Navy Club Tas Ransel Kasual EBJ - Tas Pria Backpack</p>
        //             </div>
        //             <p className='font-bold text-xs'>Rp. 309.000</p>
        //             <p className='font-medium text-[10px] text-grey text-decoration-line: line-through'>Rp. 309.000</p>
        //         </div>
        //         <div className='flex flex-col gap-2'>
        //             <div className='flex items-center gap-1'>
        //                 <svg width={10} height={10} fill="none">
        //                     <g
        //                         clipPath="url(#prefix__clip0_46_1445)"
        //                         stroke="#1F3C42"
        //                         strokeWidth={1.5}
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                     >
        //                         <path d="M8.75 4.167C8.75 7.083 5 9.583 5 9.583s-3.75-2.5-3.75-5.416a3.75 3.75 0 017.5 0z" />
        //                         <path d="M5 5.417a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" />
        //                     </g>
        //                     <defs>
        //                         <clipPath id="prefix__clip0_46_1445">
        //                             <path fill="#fff" d="M0 0h10v10H0z" />
        //                         </clipPath>
        //                     </defs>
        //                 </svg>
        //                 <p className='text-[10px] text-grey'>Jakarta Timur</p>
        //             </div>
        //             <div className='flex items-center gap-1'>
        //                 <svg width={15} height={15} fill="none">
        //                     <path fill="url(#prefix__pattern0)" d="M0 0h15v15H0z" />
        //                     <defs>
        //                         <pattern
        //                             id="prefix__pattern0"
        //                             patternContentUnits="objectBoundingBox"
        //                             width={1}
        //                             height={1}
        //                         >
        //                             <use xlinkHref="#prefix__image0_17_93" transform="scale(.00781)" />
        //                         </pattern>
        //                         <image
        //                             id="prefix__image0_17_93"
        //                             width={128}
        //                             height={128}
        //                             xlinkHref="data:image/png;base64,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"
        //                         />
        //                     </defs>
        //                 </svg>
        //                 <p className='text-[10px] text-grey'>4.9</p>
        //                 <span className='text-[10px] text-grey'>|</span>
        //                 <p className='text-[10px] text-grey'>Terjual 15rb</p>
        //             </div>
        //         </div>
        //         <Menu>
        //             <Menu.Button className="absolute bottom-2 right-2 lg:-right-12">
        //                 <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path d="M7.5 8.125C7.84518 8.125 8.125 7.84518 8.125 7.5C8.125 7.15482 7.84518 6.875 7.5 6.875C7.15482 6.875 6.875 7.15482 6.875 7.5C6.875 7.84518 7.15482 8.125 7.5 8.125Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        //                     <path d="M11.875 8.125C12.2202 8.125 12.5 7.84518 12.5 7.5C12.5 7.15482 12.2202 6.875 11.875 6.875C11.5298 6.875 11.25 7.15482 11.25 7.5C11.25 7.84518 11.5298 8.125 11.875 8.125Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        //                     <path d="M3.125 8.125C3.47018 8.125 3.75 7.84518 3.75 7.5C3.75 7.15482 3.47018 6.875 3.125 6.875C2.77982 6.875 2.5 7.15482 2.5 7.5C2.5 7.84518 2.77982 8.125 3.125 8.125Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        //                 </svg>
        //             </Menu.Button>
        //             <Menu.Items className="bg-white rounded-t-xl fixed bottom-0 z-50 left-0 w-full h-[20%] border flex flex-col gap-3 px-3 py-6 font-light text-xs shadow-[2px_0px_20px_0px_rgba(0,0,0,0.25)]">
        //                 <div className="border rounded-full border-navy" ></div>
        //                 <Menu.Item>
        //                     {({ active }) => (
        //                         <a
        //                             className={`${active && 'text-gray-400'}`}
        //                             href="/wishlist"
        //                         >
        //                             Masukkan Wishlist
        //                         </a>
        //                     )}
        //                 </Menu.Item>
        //                 <Menu.Item>
        //                     {({ active }) => (
        //                         <a
        //                             className={`${active && 'text-gray-400 '}`}
        //                             href="serupa"
        //                         >
        //                             Produk Serupa
        //                         </a>
        //                     )}
        //                 </Menu.Item>
        //             </Menu.Items>
        //         </Menu>
        //     </div>
        // </div>
    )
}

export default CardPromo