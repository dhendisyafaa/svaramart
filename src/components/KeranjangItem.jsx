// import checkbox from '../../public/icon/checkbox.svg'
import ProdukKeranjang from './ProdukKeranjang'
import BackHeader from './header/BackHeader'


const KeranjangItem = () => {
    return (
        // jadikan compoenent terpisah
        // button checkoutnya blm ada
        <>
            <BackHeader titleHeader='Bag' />
            <div className='h-[1000px]'>
                <div>
                    <div className="m-3 p-3 shadow-md">
                        <div className="flex gap-2 mb-3">
                            <input type="checkbox" name="" id="" />
                            <div className='leading-4 text-sm'>
                                <p className='font-semibold'>nama tokonya disini</p>
                                <small className='font-light text-xs'>Jakarta Selatan</small>
                            </div>
                        </div>
                        <ProdukKeranjang />
                        <ProdukKeranjang />
                        <ProdukKeranjang />
                    </div>
                </div>
                <div>
                    <div className="m-3 p-3 shadow-md">
                        <div className="flex gap-2 mb-3">
                            <input type="checkbox" name="" id="" />
                            <div className='leading-4 text-sm'>
                                <p className='font-semibold'>nama tokonya disini</p>
                                <small className='font-light text-xs'>Jakarta Selatan</small>
                            </div>
                        </div>
                        <ProdukKeranjang />
                    </div>
                </div>
                <div>
                    <div className="m-3 p-3 shadow-md">
                        <div className="flex gap-2 mb-3">
                            <input type="checkbox" name="" id="" />
                            <div className='leading-4 text-sm'>
                                <p className='font-semibold'>nama tokonya disini</p>
                                <small className='font-light text-xs'>Jakarta Selatan</small>
                            </div>
                        </div>
                        <ProdukKeranjang />
                        <ProdukKeranjang />
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeranjangItem