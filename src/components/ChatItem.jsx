import React from 'react'
import avatar from '../../public/images/icon/avatar.png'
import Image from 'next/image'

const ChatItem = () => {
    return (
        <div className="flex justify-between items-center border-b-2 pb-3 mt-3">
            <div className="flex items-center gap-2">
                <Image src={avatar} alt="photoprofil" className='h-13 w-13 rounded-full' />
                <div className="">
                    <p className='font-semibold text-sm'>Periplus Bandung</p>
                    <p className='font-semibold text-xs'>Lorem ipsum dolor sit amet...</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
                <p className='font-normal text-[10px]'>24/09/22</p>
                <div className='bg-navy text-white text-[10px] rounded-full flex justify-center items-center w-4 h-4'>1</div>
            </div>
        </div>
    )
}

export default ChatItem