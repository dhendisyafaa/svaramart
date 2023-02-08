import React from 'react'
import SearchBar from '../SearchBar'
import SvaraMartText from '../logo/SvaraMartText'
import BagIcon from '../icon/BagIcon'

const LargeScreenHeader = () => {
    return (
        <div className='grid grid-cols-[50%_auto] bg-navy px-20 py-4'>
            <SvaraMartText />
            <div className='flex gap-6 items-center px-4'>
                <SearchBar />
                <BagIcon color="#fff" />
            </div>
        </div>
    )
}

export default LargeScreenHeader