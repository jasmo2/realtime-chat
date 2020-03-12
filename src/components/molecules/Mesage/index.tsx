import React, { useState, useEffect } from 'react'
import get from 'ts-get'
import urlencode from 'urlencode'
import { Avatar, Section, Text, TextWrapper, Username } from './styles'
import { useQuery } from '@apollo/react-hooks'

import { SocketsProps } from '~/components/organisms/Chat'
// ~/graphql/local'

interface ComponentProps extends SocketsProps {
  children?: any
}

interface MessageProps {
  alt?: string | null
  text?: string
  time: Date
  type: string
  url?: string
  username: string
}

const messageDefault: MessageProps = {
  alt: null,
  text: '',
  time: new Date(),
  type: '',
  url: '',
  username: ''
}

const Message: React.FC<ComponentProps> = props => {
  const { io } = props

  const [msg, setMsg] = useState(messageDefault)
  const [urlencodedUser, setEncodedUser] = useState('')
  io.on('message', message => {
    setMsg({ ...message })
  })

  useEffect(() => {
    setEncodedUser(urlencode(msg.username))
  }, [msg.username])

  return (
    <Section>
      <Avatar src={`https://ui-avatars.com/api/?name=${urlencodedUser}`} />
      <TextWrapper>
        <Username>{msg.username}</Username>
        <Text>{msg.text}</Text>
      </TextWrapper>
    </Section>
  )
  // <TextWrapper>
  //   <Username>{username}</Username>
  //   <Text>
  //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{' '}
  //   </Text>
  //   <Text>
  //     aut odit aut fugit, sed quia consequuntur magni dolores eos qui
  //     ratione
  //   </Text>
  // </TextWrapper>
}

export default React.memo(Message)
