import React, { useState, useEffect } from 'react'
import urlencode from 'urlencode'
import { Avatar, Section, TextWrapper, Username } from './styles'
import { GiphyFetch } from '@giphy/js-fetch-api'

import { GIPHY_KEY } from '~/constants'
import Body, { BodyProps } from '~/components/atoms/Body'

interface MessageBaseProps {
  time: Date | null
  username: string
}
export interface MessageProps extends BodyProps, MessageBaseProps {}

export interface MessageRenderProps extends MessageBaseProps {
  body: BodyProps[]
}

export const messageDefault: MessageRenderProps = {
  body: [
    {
      alt: null,
      text: '',
      type: '',
      url: ''
    }
  ],
  time: null,
  username: ''
}

const Message: React.FC<MessageRenderProps> = props => {
  const { body, username } = props
  const [urlencodedUser, setEncodedUser] = useState('')

  useEffect(() => {
    setEncodedUser(urlencode(username))
  }, [username])

  return (
    <Section>
      <Avatar src={`https://ui-avatars.com/api/?name=${urlencodedUser}`} />
      <TextWrapper>
        <Username>{username}</Username>
        {body.map((msg, idx) => {
          const { type, alt, text, url } = msg
          return (
            <Body
              alt={alt}
              key={`body-key-${idx}`}
              text={text}
              type={type}
              url={url}
            />
          )
        })}
      </TextWrapper>
    </Section>
  )
}

export default React.memo(Message)
