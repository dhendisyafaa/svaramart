import SearchBar from '@/components/SearchBar'
import Link from 'next/link'
import React from 'react'

const search = () => {
    return (
        <div className='bg-navy px-5 py-3 flex items-center gap-2'>
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
            <SearchBar placeholder='Sepatu Ventela' />
        </div>
    )
}

export default search