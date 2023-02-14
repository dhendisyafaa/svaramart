import React, { useState } from 'react'

const ReadMore = ({ limit, children }) => {
    const [readMore, setReadMore] = useState(false)
    const toogleBtn = () => {
        setReadMore(prevState => !prevState)
    }
    const text = children;

    return (
        <div className='flex flex-col'>
            {readMore ? text : text.substr(0, limit)}
            <button onClick={toogleBtn} className='text-navy font-semibold border-t border-navy mt-1 pt-2 bg-white'>
                {readMore ? 'Sembunyikan' : 'Lihat Lainnya'}
            </button>
        </div>
    )
}

export default ReadMore