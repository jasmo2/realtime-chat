import React, { useState, useEffect } from 'react'
import get from 'ts-get'
import io from 'socket.io-client'

import { useQuery } from '@apollo/react-hooks'

import Chat from '~/organisms/Chat'
import Content from '~/molecules/Login'
import Layout from '~/atoms/Layout'
import { Container } from './styles'
import { QUERY_CHAT, QUERY_USERNAME } from '~/graphql/local'

const Main: React.FC = () => {
  const { data } = useQuery(QUERY_CHAT)
  const [socket, setSocket] = useState(null)
  const isOnChat = get(data, it => it.chatData.onChat, false)

  const { data: uData } = useQuery(QUERY_USERNAME)
  const username = get(uData, it => it.usernameData.username, '')
  useEffect(() => {
    console.log('useEffect=>username', username)
    setSocket(io(`https://pager-hiring.herokuapp.com/?username=${username}`))
  }, [username])

  return (
    <Container>
      <Layout>{isOnChat ? <Chat io={socket} /> : <Content />}</Layout>
    </Container>
  )
}
export default React.memo(Main)
