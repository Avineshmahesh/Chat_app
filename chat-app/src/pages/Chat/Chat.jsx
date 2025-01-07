import React from 'react'
import './Chat.css'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import Rightsidebar from '../../components/Rightsidebar/Rightsidebar'
import Chatbox from '../../components/Chatbox/Chatbox'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat-containner'>
        <Leftsidebar/>
        <Chatbox/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default Chat