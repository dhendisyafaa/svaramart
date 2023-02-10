import Link from 'next/link'
import React from 'react'

const NotifBell = () => {
    return (
        <Link href='/notification'>
            <svg
                width={25}
                height={25}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M18.75 8.333a6.25 6.25 0 0 0-12.5 0c0 7.292-3.125 9.375-3.125 9.375h18.75s-3.125-2.083-3.125-9.375ZM14.302 21.875a2.082 2.082 0 0 1-3.604 0"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Link>
    )
}

export default NotifBell