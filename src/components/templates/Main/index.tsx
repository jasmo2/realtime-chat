import React, { useState } from 'react'
import get from 'ts-get'
import { useQuery } from '@apollo/react-hooks'

import Chat from '~/components/organisims/Chat'
import Content from '~/components/molecules/Login'
import Layout from '~/components/atoms/Layout'
import { Container } from './styles'
import { QUERY_CHAT } from '~/graphql/local'

const Main: React.FC = () => {
  const { data } = useQuery(QUERY_CHAT)
  const isOnChat = get(data, it => it.chatData.onChat, false)

  return (
    <Container>
      <Layout>{isOnChat ? <Chat /> : <Content />}</Layout>
    </Container>
  )
}
export default React.memo(Main)
