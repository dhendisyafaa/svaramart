import React from 'react'

const VoucherComponent = () => {
    return (
        <div className='flex justify-between items-center pr-5 border'>
            <div className='flex gap-3 items-center'>
                <img src="" alt="gratis ongkir" className='w-24 h-20 bg-navy' />
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