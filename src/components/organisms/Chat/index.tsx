import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'

import Messages from '~/organisms/Messages'
import Write from '~/molecules/Writte'

export interface SocketsProps {
  io: any
}

interface ChatProps extends SocketsProps {
  children?: any
}

const Chat: React.FC<ChatProps> = props => {
  const { io } = props
  const [typers, setTypers] = useState({})

  io.on('is-typing', typers => {
    /* <typers> is a map where the `key` is the <username> and the value
     *  is a `boolean` that is `true` if the user is typing and `false` if not.
     */
    setTypers({ ...typers })
  })

  return (
    <>
      <Messages io={io} />
      <Write io={io} typers={typers} />
    </>
  )
}

export default React.memo(Chat)
