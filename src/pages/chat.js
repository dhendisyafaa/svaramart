import ChatItem from '@/components/ChatItem'
import SearchBar from '@/components/SearchBar'
import BackHeader from '@/components/header/BackHeader'

const chat = () => {
    return (
        <>
            <BackHeader titleHeader="Chat" styleName="hidden"/>
            <div className='px-3 mt-3'>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
            </div>
        </>
    )
}

export default chat