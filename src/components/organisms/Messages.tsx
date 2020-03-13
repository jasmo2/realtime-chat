import React, { useState } from 'react'
import get from 'ts-get'

import { SocketsProps } from '~/components/organisms/Chat'
import Message, { MessageProps } from '~/molecules/Mesage'

interface ComponentProps extends SocketsProps {
  children?: any
}

const Messages: React.FC<ComponentProps> = props => {
  const { io } = props

  const [msgs, setMsgs] = useState<MessageProps[]>([])
  io.on('message', message => {
    const lastIndex = msgs.length - 1
    const lastMsg = msgs[lastIndex]

    if (
      lastIndex === -1 ||
      (lastMsg && lastMsg.username !== message.username)
    ) {
      setMsgs(msgs.concat({ ...message }))
    }
  })

  return (
    <>
      {msgs.length <= 1
        ? null
        : msgs.map((msg, idx) => (
            <Message key={`message-key-${idx}`} {...msg} />
          ))}
    </>
  )
}

export default React.memo(Messages)
