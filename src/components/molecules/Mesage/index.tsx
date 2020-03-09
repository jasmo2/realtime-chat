import React, { useState, useEffect } from 'react'
import axios from 'axios'
import get from 'ts-get'
import urlencode from 'urlencode'
import { Avatar, Section, Text, TextWrapper, Username } from './styles'
import { useQuery } from '@apollo/react-hooks'

import { QUERY_USERNAME } from '../../../../graphql/local'
// ~/graphql/local'

interface MessageProps {
  children?: any
}

const Message: React.FC<MessageProps> = () => {
  const { data } = useQuery(QUERY_USERNAME)

  let urlencodedUser = ''
  const username = get(data, it => it.usernameData.username, '')
  if (username) {
    urlencodedUser = urlencode(username)
  }

  return (
    <Section>
      <Avatar src={`https://ui-avatars.com/api/?name=${urlencodedUser}`} />
      <TextWrapper>
        <Username>{username}</Username>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{' '}
        </Text>
        <Text>
          aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione
        </Text>
      </TextWrapper>
    </Section>
  )
}

export default React.memo(Message)
