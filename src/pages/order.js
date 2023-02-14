import RiwayatTransaksi from '@/components/RiwayatTransaksi'
import HamburgerMenu from '@/components/icon/HamburgerMenu'
import NavbarComponent from '@/components/navbar/NavbarComponent'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import Image from 'next/image'
import avatar from '../../public/images/icon/avatar.png'
import logoPromo from '../../public/images/icon/logo promo.png'

const order = () => {
    return (
        <>
            <div className='bg-navy'>
                <div className='w-full flex justify-end px-3 pt-3 lg:px-24'>
                    <HamburgerMenu />
                </div>
                <div className='flex items-center gap-2 px-5 pb-7 lg:px-24'>
                    <Image
                        src={avatar} />
                    <div>
                        <p className='font-normal text-md text-white'>namaemail@gmail.com</p>
                        <div className='flex items-center gap-1'>
                            <svg width={10} height={10} fill="none">
                                <g
                                    clipPath="url(#prefix__clip0_46_1445)"
                                    stroke="#fff"
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
                            <p className='text-[10px] text-white'>alamatmu Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-t-3xl lg:px-24'>
                    <Tab.Group>
                        <Tab.List className="py-8 px-6 gap-8 flex">
                            <Tab className={({ selected }) =>
                                classNames(
                                    '',
                                    selected
                                        ? 'border-b-navy border-b-2 font-medium outline-transparent'
                                        : 'text-grey'
                                )
                            }>
                                <p>Pesanan</p>
                            </Tab>
                            <Tab className={({ selected }) =>
                                classNames(
                                    '',
                                    selected
                                        ? 'border-b-navy border-b-2 font-medium outline-transparent'
                                        : 'text-grey'
                                )
                            }>
                                <p>Transaksi</p>
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className="px-6">
                            <Tab.Panel>
                                <div>
                                    <div className='mb-8'>
                                        <p className='text-sm'>Status Pesanan</p>
                                    </div>
                                    <div className='flex justify-around'>
                                        <div className='text-center flex flex-col gap-1'>
                                            <Image
                                                src={logoPromo}
                                                className='mx-auto'
                                            />
                                            <p className='font-medium text-[10px]'>Belum Bayar</p>
                                        </div>
                                        <div className='text-center flex flex-col gap-1'>
                                            <Image
                                                src={logoPromo}
                                                className='mx-auto'
                                            />
                                            <p className='font-medium text-[10px]'>Diproses</p>
                                        </div>
                                        <div className='text-center flex flex-col gap-1'>
                                            <Image
                                                src={logoPromo}
                                                className='mx-auto'
                                            />
                                            <p className='font-medium text-[10px]'>Dikirim</p>
                                        </div>
                                        <div className='text-center flex flex-col gap-1'>
                                            <Image
                                                src={logoPromo}
                                                className='mx-auto'
                                            />
                                            <p className='font-medium text-[10px]'>Ulasan</p>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className='flex flex-col gap-5 h-[2000px]'>
                                    <RiwayatTransaksi/>
                                    <RiwayatTransaksi/>
                                    <RiwayatTransaksi/>
                                    <RiwayatTransaksi/>
                                </div>
                            </Tab.Panel>

                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
            <NavbarComponent />
        </>
    )
}

export default order