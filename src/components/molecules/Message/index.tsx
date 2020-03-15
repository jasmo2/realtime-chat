import React, { useState, useEffect } from 'react'
import urlencode from 'urlencode'
import { Avatar, Section, Text, TextWrapper, Username, Gif } from './styles'
import { GiphyFetch } from '@giphy/js-fetch-api'

import { GIPHY_KEY } from '~/constants'

const gf = new GiphyFetch(GIPHY_KEY)

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

  useEffect(() => {
    setEncodedUser(urlencode(username))
  }, [username])

  return (
    <Section>
      <Avatar src={`https://ui-avatars.com/api/?name=${urlencodedUser}`} />
      <TextWrapper>
        <Username>{username}</Username>
        {url ? <Gif src={url} alt={alt!} /> : <Text>{text}</Text>}
      </TextWrapper>
    </Section>
  )
}

export default React.memo(Message)
