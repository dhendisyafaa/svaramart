import Link from 'next/link'
import React from 'react'

const HamburgerMenu = () => {
    return (
        <Link href='/settings'>
            <svg
                width={35}
                height={35}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8 17h18M8 11h18M8 23h18"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Link>
    )
}

export default HamburgerMenu