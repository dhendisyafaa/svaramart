import React from 'react'

const BagIcon = (props) => {
    return (
        <svg width={26} height={26} fill="none">
            <path
                d="M6.5 2.167L3.25 6.5v15.167a2.167 2.167 0 002.167 2.166h15.166a2.167 2.167 0 002.167-2.166V6.5L19.5 2.167h-13zM3.25 6.5h19.5M17.333 10.833a4.333 4.333 0 11-8.666 0"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default BagIcon