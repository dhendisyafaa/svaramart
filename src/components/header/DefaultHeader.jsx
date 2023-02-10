import React from 'react'
import SvaraMartText from '../logo/SvaraMartText'
import NotifBell from '../icon/NotifBell'
import HamburgerMenu from '../icon/HamburgerMenu'
import Link from 'next/link'

const DefaultHeader = () => {
  return (
    <div className='flex justify-between bg-navy px-5 py-4'>
      <SvaraMartText />
      <div className='flex items-center gap-1'>
        <NotifBell />
        <HamburgerMenu />
      </div>
    </div>
  )
}

export default DefaultHeader