import Image from 'next/image'
import imgProduct from '../../public/images/product/img-product.png'

const ProdukKeranjang = () => {
    return (
        <div className="flex gap-2 py-2">
            <input type="checkbox" name="" id="" />
            <Image
                alt="photo product"
                src={imgProduct}
                className="rounded-lg ml-2 w-20 h-20"
            />
            <div className="flex flex-col gap-2 w-full">
                <div className=''>
                    <p className='font-normal text-base leading-4'>Harry Potter and the Prisoner of Azkaban</p>
                    <p className='font-bold text-md'>Rp 185.999</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <div className="flex items-center gap-3">
                            <button className='border-navy border-2 w-5 rounded-md'>-</button>
                            <p>1</p>
                            <button className='border-navy border-2 w-5 rounded-md'>+</button>
                        </div>
                        <div>
                            <svg width={18} height={15} fill="none">
                                <path
                                    d="M16.612 1.326a4.756 4.756 0 00-1.537-.981 4.928 4.928 0 00-3.626 0 4.757 4.757 0 00-1.536.981L9 2.198l-.913-.872A4.852 4.852 0 004.737 0a4.852 4.852 0 00-3.35 1.326C.5 2.175 0 3.326 0 4.526c0 1.201.5 2.352 1.388 3.201l.912.872L9 15l6.7-6.4.912-.873c.44-.42.79-.92 1.027-1.468a4.351 4.351 0 000-3.465 4.517 4.517 0 00-1.027-1.468z"
                                    fill="#8E8E8E"
                                />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <svg width={24} height={24} fill="none">
                            <path
                                d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"
                                stroke="#8E8E8E"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProdukKeranjang