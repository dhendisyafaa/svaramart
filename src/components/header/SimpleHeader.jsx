import React from 'react'

const SimpleHeader = (props) => {
  return (
    <div className='bg-navy px-5 py-4'>
        <p className='text-white font-medium text-md'>{props.titleHeader}</p>
    </div>
  )
}

export default SimpleHeader