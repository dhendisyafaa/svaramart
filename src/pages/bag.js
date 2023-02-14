import ItemBag from "@/components/ItemBag"
import BackHeader from "@/components/header/BackHeader"
import Link from "next/link"

const bag = () => {
    return (
        <>
            <BackHeader titleHeader='Bag' styleIcon="hidden" />
            <div className="h-[1700px] lg:px-18 md:grid md:grid-cols-[auto_30%]">
                <div className="">
                    <ItemBag />
                    <ItemBag />
                    <ItemBag />
                </div>
                <div className="hidden md:flex flex-col justify-between shadow-lg p-5 rounded-lg w-full h-44  sticky top-24">
                    <p className="font-bold text-xl text-[#2c2c2c]">Detail Pesanan</p>
                    <div className="flex justify-between">
                        <p className="font-medium text-lg text-[#2c2c2c]">Total</p>
                        <p className="font-medium text-lg text-navy">Rp95.000</p>
                    </div>
                    <Link href="/checkout" className="bg-navy text-white text-center rounded-3xl w-full py-2 font-semibold text-lg hover:bg-[#183237] active:bg-[#13292e]">Checkout (100)</Link>
                </div>
                <div className="md:hidden grid grid-cols-[auto_35%] fixed bottom-0 items-center w-full h-[8vh] bg-white z-30">
                    <div className='py-2.5 px-5'>
                        <p className='font-normal text-xs'>Total Belanja</p>
                        <p className='font-bold text-md text-navy'>Rp. 129.950</p>
                    </div>
                    <Link href="/checkout" className='bg-navy hover:bg-[#183237] active:bg-[#13292e] text-white h-full flex justify-center items-center text-center font-bold text-sm'>Checkout (100)</Link>
                </div>
            </div>
        </>
    )
}

export default bag