import React, { useState } from 'react'

import { SocketsProps } from '~/components/organisms/Chat'
import Message, {
  MessageProps,
  messageDefault
} from '~/components/molecules/Message'

interface ComponentProps extends SocketsProps {
  children?: any
}
const Messages: React.FC<ComponentProps> = props => {
  const { io } = props

  const [msgs, setMsgs] = useState<MessageProps[]>([messageDefault])
  io.on('message', message => {
    const lastIndex = msgs.length - 1
    if (lastIndex === 0) {
      const lastOldMsgTime = msgs[lastIndex].time
      if (lastOldMsgTime !== message.time) {
        setMsgs(oldMsgs => [...oldMsgs, message])
      }
    }
  })

  return (
    <>
      {msgs.map((msg, idx) => {
        return idx === 0 ? null : (
          <Message key={`message-key-${idx}`} {...msg} />
        )
      })}
    </>
  )
}

export default React.memo(Messages)
