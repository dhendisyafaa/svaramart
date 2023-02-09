import React from 'react'
import SearchBar from '../SearchBar'
import SvaraMartText from '../logo/SvaraMartText'
import BagIcon from '../icon/BagIcon'
import ChatIcon from '../icon/ChatIcon'
import HamburgerMenu from '../icon/HamburgerMenu'

const LargeScreenHeader = () => {
    return (
        <div className='grid grid-cols-[50%_auto] items-center bg-navy px-20 py-4'>
            <SvaraMartText />
            <div className='flex gap-3 items-center px-4'>
                <SearchBar />
                <BagIcon color="#fff" />
                <ChatIcon color="#fff"/>
                <HamburgerMenu/>
            </div>
        </div>
    )
}

export default LargeScreenHeader