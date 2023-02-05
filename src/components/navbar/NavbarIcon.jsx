import Link from 'next/link'
import React from 'react'

export const BerandaIcon = ({ href, navbarName, selected }) => {
    return (
        <Link href={href} className={`items-center flex flex-col ${selected ? 'text-navy font-semibold' : ''}`}>
            <svg width={23} height={23} fill="none">
                <path
                    d="M2.875 8.625L11.5 1.917l8.625 6.708v10.542a1.916 1.916 0 01-1.917 1.916H4.792a1.916 1.916 0 01-1.917-1.916V8.625z"
                    stroke={`${selected ? '#1F3C42' : '#848484 '}`}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <p className='text-xs'>
                {navbarName}
            </p>
        </Link>
    )
}

export const PromoIcon = ({ href, navbarName, selected }) => {
    return (
        <Link href={href} className={`items-center flex flex-col ${selected ? 'text-navy font-semibold' : ''}`}>
            <svg width={23} height={23} fill="none">
                <path
                    d="M14.11 7.723l-6.444 6.332M8.306 7.667a.639.639 0 100-1.278.639.639 0 000 1.278zM14.694 15.333a.639.639 0 100-1.277.639.639 0 000 1.277z"
                    stroke={`${selected ? '#1F3C42' : '#848484 '}`}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <rect
                    x={1.958}
                    y={1.958}
                    width={18.444}
                    height={18.444}
                    rx={4}
                    stroke={`${selected ? '#1F3C42' : '#848484 '}`}
                    strokeWidth={2}
                />
            </svg>
            <p className='text-xs'>
                {navbarName}
            </p>
        </Link>

    )
}

export const OrderIcon = ({ href, navbarName, selected }) => {
    return (
        <Link href={href} className={`items-center flex flex-col ${selected ? 'text-navy font-semibold' : ''}`}>
            <svg width={24} height={23} fill="none">
                <path
                    d="M16.613 9.008L7.988 4.035"
                    stroke={`${selected ? '#1F3C42' : '#848484 '}`}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M20.925 15.333V7.667a1.916 1.916 0 00-.958-1.658l-6.709-3.834a1.917 1.917 0 00-1.916 0L4.633 6.01a1.917 1.917 0 00-.958 1.658v7.666a1.917 1.917 0 00.958 1.658l6.709 3.834a1.917 1.917 0 001.916 0l6.709-3.834a1.916 1.916 0 00.958-1.658z"
                    stroke={`${selected ? '#1F3C42' : '#848484 '}`}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M3.934 6.67l8.366 4.84 8.366-4.84M12.3 21.16V11.5"
                    stroke={`${selected ? '#1F3C42' : '#848484 '}`}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <p className='text-xs'>
                {navbarName}
            </p>
        </Link>

    )
}
export const ChatIcon = ({ href, navbarName, selected }) => {
    return (
        <Link href={href} className={`items-center flex flex-col ${selected ? 'text-navy font-semibold' : ''}`}>
            <svg width={23} height={23} fill="none">
                <path
                    d="M20.125 14.375a1.917 1.917 0 01-1.917 1.917h-11.5l-3.833 3.833V4.792a1.917 1.917 0 011.917-1.917h13.416a1.916 1.916 0 011.917 1.917v9.583z"
                    stroke={`${selected ? '#1F3C42' : '#848484 '}`}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <p className='text-xs'>
                {navbarName}
            </p>
        </Link>
    )
}
