import React from 'react'
import SearchBar from '../SearchBar'
import SvaraMartText from '../logo/SvaraMartText'
import BagIcon from '../icon/BagIcon'
import ChatIcon from '../icon/ChatIcon'
import HamburgerMenu from '../icon/HamburgerMenu'

const LargeScreenHeader = () => {
    return (
        <div className='flex py-4 container mx-auto px-24 justify-between'>
            <SvaraMartText />
            <div className='flex gap-3 items-center'>
                <SearchBar />
                <BagIcon color="#fff" />
                <ChatIcon color="#fff"/>
                <HamburgerMenu/>
            </div>
        </div>
    )
}

export default LargeScreenHeader