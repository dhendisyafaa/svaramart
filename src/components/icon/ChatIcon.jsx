import Link from 'next/link'
import React from 'react'

const ChatIcon = (props) => {
    return (
        <Link href="/chat">
            <svg width={23} height={23} fill="none">
                <path
                    d="M20.125 14.375a1.917 1.917 0 01-1.917 1.917h-11.5l-3.833 3.833V4.792a1.917 1.917 0 011.917-1.917h13.416a1.916 1.916 0 011.917 1.917v9.583z"
                    stroke={props.color}
                    strokeWidth={2}
                />
            </svg>
        </Link>
    )
}

export default ChatIcon