import React from 'react'
import {} from './styles'
import Message from '~/components/molecules/Mesage'
import Write from '~/components/molecules/Writte'

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
