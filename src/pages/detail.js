import ReviewComponent from '@/components/ReviewComponent'
import VoucherComponent from '@/components/VoucherComponent'
import BackHeader from '@/components/header/BackHeader'
import ChatIcon from '@/components/icon/ChatIcon'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import avatar from '../../public/images/icon/avatar.png'
import photoProduct from '../../public/images/product/img-product.png'

const detail = () => {
  return (
    <div className='h-[2000px]'>
      <BackHeader titleHeader="" styleName='py-[5px]' />
      <div>
        <div className=''>
          <Image src={photoProduct} alt="" className='w-full h-full' />
        </div>
        <div className='px-3 py-3'>
          <p className=''>Harry Potter and the Prisoner of Azkaban</p>
          <p className='text-navy font-bold'>Rp 185.999</p>
          <div className='flex items-center gap-1 mt-2'>
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
            <p className='text-[12px] font-bold'>4.9</p>
            <p className='text-[12px] text-grey'>789</p>
            <span className='text-[12px] text-grey'>|</span>
            <p className='text-[12px] text-grey'>Terjual 15rb</p>
          </div>
        </div>
        <div className="w-full px-1">
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#1f3c4216] px-4 py-2 text-left text-sm font-medium text-navy">
                    <span>Deskripsi Produk</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-navy`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you&apos;re unhappy with your purchase for any reason, email us
                    within 90 days and we&apos;ll refund you in full, no questions asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <div className='flex flex-col shadow-md mx-4 rounded-lg py-4 px-5 mt-4'>
          <div className='flex flex-col gap-4'>
            <p className='font-medium text-md text-navy'>Informasi Toko</p>
            <div className='flex items-center justify-between'>
              <div className='flex gap-2 items-center'>
                <Image src={avatar} alt="avatar toko" />
                <p className='text-sm'>Lorem ipsum dolor sit </p>
              </div>
              <button type="" className='bg-navy text-white py-[3px] px-4 rounded-md text-[10px]'>Ikuti</button>
            </div>
          </div>
          <div className='mt-5'>
            <div className='flex gap-2 items-baseline'>
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
              <div>
                <p className='font-medium text-md text-navy'>Alamat Toko</p>
                <p className='text-grey text-sm'>Kab. Bandung Barat</p>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <div className='flex gap-2 items-center'>
              <svg width={15} height={15} fill="none">
                <path
                  d="M11.875 3.125l-8.75 8.75M4.063 5.625a1.563 1.563 0 100-3.125 1.563 1.563 0 000 3.125zM10.938 12.5a1.563 1.563 0 100-3.125 1.563 1.563 0 000 3.125z"
                  stroke="#1F3C42"
                  strokeWidth={1.3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className='font-medium text-md text-navy'>Voucher Toko</p>
            </div>
            <div className=' flex gap-2 overflow-x-scroll scrollbar-hide py-3'>
              <VoucherComponent />
              {/* <VoucherComponent />
              <VoucherComponent />
              <VoucherComponent /> */}
            </div>
          </div>
        </div>
        <div className='flex flex-col shadow-md mx-4 rounded-lg mt-4'>
          <div>
            <div className='px-5 pt-6'>
              <div className='flex justify-between'>
                <p className='font-semibold text-sm text-navy'>Ulasan</p>
                <Link href='/'>
                  <p className='text-gray text-[10px]'>Lihat Semua &gt;</p>
                </Link>
              </div>
              <div className='flex items-center gap-1 mt-2'>
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
                <p className='text-[12px] font-bold'>4.9</p>
                <p className='text-[12px] text-grey'>1.972 rating</p>
                <span className='text-[12px] text-grey'>|</span>
                <p className='text-[12px] text-grey'>61 ulasan</p>
              </div>
            </div>
            <div className='p-3'>
              <ReviewComponent />
              <ReviewComponent />
              <ReviewComponent />
            </div>
          </div>
        </div>
      </div>
      <div className='flex fixed bottom-0 items-center w-full py-5 px-2 gap-1 justify-around rounded-t-xl bg-white shadow-[0px_5px_10px_0px_rgba(0,0,0,1)] z-30'>
        <div className='border border-navy px-3 py-1 rounded-lg'>
          <ChatIcon color='#1F3C42' />
        </div>
        <button type="" className='border border-navy rounded-lg text-navy px-6 py-1'>Beli Sekarang</button>
        <button type="" className='bg-navy rounded-lg text-white px-6 py-1'>+ Keranjang</button>
      </div>
    </div>
  )
}

export default detail