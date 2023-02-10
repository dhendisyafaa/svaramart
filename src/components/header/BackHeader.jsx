import Link from 'next/link'
import React from 'react'

const BackHeader = (props) => {
    return (
        <div className='bg-navy px-5 py-4 flex items-center gap-2'>
            <Link href='/'>
                <svg width={24} height={24} fill="none">
                    <path
                        d="M19 12H5M12 19l-7-7 7-7"
                        stroke="#fff"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>
            <p className='text-white font-medium text-md'>{props.titleHeader}</p>
        </div>
    )
}

export default BackHeader