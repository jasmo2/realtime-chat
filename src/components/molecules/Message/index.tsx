import React, { useState, useEffect } from 'react'
import urlencode from 'urlencode'
import { Avatar, Section, TextWrapper, Username } from './styles'
import { GiphyFetch } from '@giphy/js-fetch-api'

import { GIPHY_KEY } from '~/constants'
import Body, { BodyProps } from '~/components/atoms/Body'

const gf = new GiphyFetch(GIPHY_KEY)

export interface MessageProps extends BodyProps {
  time: Date | null
  type: string
  url?: string
  username: string
}

export const messageDefault: MessageProps = {
  alt: null,
  text: '',
  time: null,
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
        <Body text={text} url={url} alt={alt} />
      </TextWrapper>
    </Section>
  )
}

export default React.memo(Message)
