import React, { useState } from 'react'
import get from 'ts-get'

import { SocketsProps } from '~/components/organisms/Chat'
import Message, { MessageProps, messageDefault } from '~/molecules/Mesage'

interface ComponentProps extends SocketsProps {
  children?: any
}

const Messages: React.FC<ComponentProps> = props => {
  const { io } = props

  const [msgs, setMsgs] = useState<MessageProps[]>([messageDefault])
  io.on('message', message => {
    const lastIndex = msgs.length - 1
    const lastMsg = msgs[lastIndex]
    if (lastIndex === 0) {
      setMsgs(oldMsgs => {
        const lastOldMsgTime = oldMsgs[lastIndex].time
        if (lastOldMsgTime === message.time) {
          return oldMsgs
        } else {
          return [...oldMsgs, message]
        }
      })
    }
    // else if (lastMsg && lastMsg.username !== message.username) {
    //   console.log(
    //     'TCL: lastMsg && lastMsg.username !== message.username',
    //     lastMsg && lastMsg.username !== message.username
    //   )
    //   console.log('TCL: msgs', msgs)
    //   //@ts-ignore
    //   setMsgs(msgs.push(message))
    // }
  })

  return (
    <>
      {msgs.length <= 1
        ? null
        : msgs.map((msg, idx) => {
            return idx === 0 ? null : (
              <Message key={`message-key-${idx}`} {...msg} />
            )
          })}
    </>
  )
}

export default React.memo(Messages)
