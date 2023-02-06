import React from 'react'

const ButtonSmall = (props) => {
  return (
    <button className='text-[8px] bg-navy text-white rounded-lg max-w-fit px-2 text-center py-1'>{props.innerText}</button>
  )
}

export default ButtonSmall