import React from 'react'
import ButtonSmall from './button/ButtonSmall'
import logoPromo from '../../public/images/icon/logo promo.png'
import Image from 'next/image'

const RiwayatTransaksi = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="flex justify-between items-center border-b-2 pb-2">
                <p className='font-normal text-xs'>7 Juni 2023</p>
                <button className='bg-[#DDECEF] text-accent text-xs font-semibold py-0.5 px-2 rounded'>Proses</button>
            </div>
            <div className="flex mt-2 items-center gap-2">
                <Image src={logoPromo} alt="fotoproduk" width={48} height={48} />
                <div className="info-produk">
                    <p className='text-xs font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className='font-light text-xs'>nama tokonya</p>
                </div>
            </div>
            <div className="flex justify-between items-center mt-1">
                <p className='text-sm font-semibold'>Rp 50.000</p>
                <ButtonSmall
                    innerText="Lacak" href="/"/>
            </div>

        </div>
    )
}

export default RiwayatTransaksi