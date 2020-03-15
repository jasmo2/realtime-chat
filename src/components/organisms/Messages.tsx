import React, { useState } from 'react'

import { SocketsProps } from '~/components/organisms/Chat'
import Message, {
  MessageProps,
  messageDefault
} from '~/components/molecules/Message'

interface ComponentProps extends SocketsProps {
  children?: any
}

let lastMsg: MessageProps = messageDefault
const Messages: React.FC<ComponentProps> = props => {
  const { io } = props

  const [msgs, setMsgs] = useState<MessageProps[]>([messageDefault])

  io.on('message', (message: MessageProps) => {
    const lastIndex = msgs.length - 1

    if (lastIndex === 0) {
      const {
        time: oldT,
        username: oldU,
        text: oldTxt,
        url: oldUrl,
        alt: oldAlt
      } = lastMsg

      if (lastMsg.time && oldT !== message.time) {
        if (oldU === message.username) {
          msgs.pop()
          const newMsg = {
            text: [oldTxt, message.text],
            url: message.url ? [oldUrl, message.url] : message.url,
            alt: message.alt ? [oldAlt, message.alt] : message.alt
          } as any

          setMsgs(msgs.concat(newMsg))
        } else {
          setMsgs(oldMsgs => [...oldMsgs, message])
        }
        lastMsg = message
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
