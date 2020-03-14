import React, { useState, useEffect } from 'react'
import urlencode from 'urlencode'
import { Avatar, Section, Text, TextWrapper, Username } from './styles'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { useQuery } from '@apollo/react-hooks'
import { QUERY_GIF } from '~/graphql/local'
import get from 'ts-get'

const gf = new GiphyFetch(process.env.GIPHY_KEY!)

export interface MessageProps {
  alt?: string | null
  text?: string
  time: Date
  type: string
  url?: string
  username: string
}

export const messageDefault: MessageProps = {
  alt: null,
  text: '',
  time: new Date(),
  type: '',
  url: '',
  username: ''
}

const Message: React.FC<MessageProps> = props => {
  const { alt, text, time, type, url, username } = props
  const [urlencodedUser, setEncodedUser] = useState('')
  // const { data } = useQuery(QUERY_GIF)
  // console.log('TCL: data', data)
  // const isOnChat = get(data, it => it.gifQuery.queryGif, false)

  useEffect(() => {
    setEncodedUser(urlencode(username))
  }, [username])

  return (
    <Section>
      <Avatar src={`https://ui-avatars.com/api/?name=${urlencodedUser}`} />
      <TextWrapper>
        <Username>{username}</Username>
        <Text>{text}</Text>
      </TextWrapper>
    </Section>
  )
}

export default React.memo(Message)
