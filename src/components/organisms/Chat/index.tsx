import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import io from 'socket.io-client'

import Message from '~/molecules/Mesage'
import Write from '~/molecules/Writte'
import { QUERY_USERNAME } from '~/graphql/local'
import get from 'ts-get'

interface ChatProps {
  children?: any
}

export interface SocketsProps {
  io: any
}

const Chat: React.FC<ChatProps> = () => {
  const [socket, setSocket] = useState(null)
  const { data: uData } = useQuery(QUERY_USERNAME)
  const username = get(uData, it => it.usernameData.username, '')

  useEffect(() => {
    console.log('useEffect=>username', username)
    setSocket(io(`https://pager-hiring.herokuapp.com/?username=${username}`))
  }, [])

  return (
    <>
      <Message io={socket} />
      <Write io={socket} />
    </>
  )
}

export default React.memo(Chat)
