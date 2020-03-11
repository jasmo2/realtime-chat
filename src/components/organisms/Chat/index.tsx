import React from 'react'
import {} from './styles'
import Message from '~/molecules/Mesage'
import Write from '~/molecules/Writte'

interface ChatProps {
  children?: any
}

const Chat: React.FC<ChatProps> = () => {
  return (
    <>
      <Message />
      <Write />
    </>
  )
}

export default React.memo(Chat)
