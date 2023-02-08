import React from 'react'
import gratong from '../../public/images/icon/gratis-ongkir.png'
import Image from 'next/image'

const VoucherComponent = () => {
    return (
        <div className='flex justify-between items-center pr-5 border lg:w-[25vw]'>
            <div className='flex gap-3 items-center'>
                <Image
                    src={gratong}
                    width={96}
                    height={88}
                    alt='gratis ongkir'
                />
                <div>
                    <p className='text-[10px] text-grey -mb-1'>Min. Transaksi</p>
                    <p className='font-bold text-lg'>Rp150.000</p>
                </div>
            </div>
            <button className='bg-navy text-white uppercase w-14 h-4 text-[10px]'>Klaim</button>
        </div>
    )
}

export default VoucherComponent