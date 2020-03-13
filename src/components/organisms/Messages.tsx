import React, { useState, useEffect } from 'react'

import { SocketsProps } from '~/components/organisms/Chat'
import Message, { messageDefault } from '~/molecules/Mesage'

interface ComponentProps extends SocketsProps {
  children?: any
}

const Messages: React.FC<ComponentProps> = props => {
  const { io } = props

  const [msgs, setMsgs] = useState([messageDefault])
  io.on('message', message => {
    const lastIndex = msgs.length - 1
    const lastMsg = msgs[lastIndex]
    if (lastMsg.username !== message.username) {
      setMsgs(msgs.concat({ ...message }))
    }
  })

  return <>{msgs.length === 0 ? null : msgs.map(msg => <Message {...msg} />)}</>
}

export default React.memo(Messages)
