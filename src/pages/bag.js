import ItemBag from "@/components/ItemBag"
import BackHeader from "@/components/header/BackHeader"
import Link from "next/link"

const bag = () => {
    return (
        <div className="h-[1700px]">
            <BackHeader titleHeader='Bag' />
            <ItemBag />
            <ItemBag />
            <ItemBag />
            <div className="grid grid-cols-[auto_35%] fixed bottom-0 items-center w-full h-[8vh] bg-white z-30">
                <div className='py-2.5 px-6'>
                    <p className='font-normal text-xs'>Total Belanja</p>
                    <p className='font-bold text-md text-navy'>Rp. 129.950</p>
                </div>
                <Link href="/checkout" className='bg-navy text-white h-full flex justify-center items-center font-bold text-sm'>Checkout (100)</Link>
            </div>
        </div>
    )
}

export default bag