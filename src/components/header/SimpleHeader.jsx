import React from 'react'
import NotifBell from '../icon/NotifBell'
import BagIcon from '../icon/BagIcon'
import HamburgerMenu from '../icon/HamburgerMenu'

const SimpleHeader = (props) => {
  return (
    <div className='bg-navy px-5 py-3 flex items-center justify-between'>
      <p className='text-white font-medium text-md'>{props.titleHeader}</p>
      <div className='flex items-center gap-1'>
        <NotifBell />
        <BagIcon color="#fff" />
        <HamburgerMenu />
      </div>
    </div>
  )
}

export default SimpleHeader