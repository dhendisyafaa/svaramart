import Link from 'next/link'
import React from 'react'
import BagIcon from '../icon/BagIcon'
import HamburgerMenu from '../icon/HamburgerMenu'
import classNames from 'classnames'

const BackHeader = ({titleHeader, styleName, styleIcon}) => {
    return (
        <div className={classNames('bg-navy px-3 lg:px-10 py-4 flex items-center justify-between', styleName)}>
            <div className='flex gap-2 items-center'>
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
                <p className='text-white font-medium text-md'>{titleHeader}</p>
            </div>
            <div className={classNames('flex items-center gap-1', styleIcon)}>
                <BagIcon color="#fff"/>
                <HamburgerMenu/>
            </div>
        </div>
    )
}

export default BackHeader