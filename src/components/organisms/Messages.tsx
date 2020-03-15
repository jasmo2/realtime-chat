import React, { useState } from 'react'

import { SocketsProps } from '~/components/organisms/Chat'
import Message, {
  MessageProps,
  messageDefault,
  MessageRenderProps
} from '~/components/molecules/Message'
import { BodyProps } from '../atoms/Body'

interface ComponentProps extends SocketsProps {
  children?: any
}

let lastMsg: MessageRenderProps = messageDefault
const Messages: React.FC<ComponentProps> = props => {
  const { io } = props

  const [msgs, setMsgs] = useState<MessageRenderProps[]>([messageDefault])

  io.on('message', (message: MessageProps) => {
    const { time: oldT, username: oldU, body: oldBody } = lastMsg
    const { time, username, ...body } = message

    if (!lastMsg.time || oldT !== time) {
      const msg = { time, username, body: [body] }

      if (oldU === username) {
        const newBody: BodyProps[] = oldBody.concat(body)
        setMsgs(oldMsgs => {
          const newMsg = oldMsgs.pop()
          newMsg!.body = newBody
          return [...oldMsgs, newMsg!]
        })
      } else {
        setMsgs(oldMsgs => [...oldMsgs, msg])
      }
      lastMsg = msg
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
