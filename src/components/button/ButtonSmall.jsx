import Link from 'next/link'
import React from 'react'

const ButtonSmall = (props) => {
  return (
    <Link href={props.href}>
      <button className='text-[8px] font-medium hover:bg-[#102a30] bg-navy text-white rounded-lg max-w-fit px-2 text-center py-1'>{props.innerText}</button>
    </Link>
  )
}

export default ButtonSmall