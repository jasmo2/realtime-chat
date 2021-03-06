import React, { useState, FormEvent, Dispatch, SetStateAction } from 'react'
import { Button, ButtonWrapper, Form, Input, JoinTitle, Label } from './styles'
import { useMutation } from '@apollo/react-hooks'

import { MUTATION_CHAT, MUTATION_USERNAME } from '~/graphql/local'

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [username, setFormUsername] = useState('')
  const [connecting, setConnecting] = useState(false)
  const [setIsOnChat] = useMutation(MUTATION_CHAT)
  const [setUsername] = useMutation(MUTATION_USERNAME)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setConnecting(true)
    setUsername({ variables: { username } })

    setConnecting(false)
    setIsOnChat({ variables: { onChat: true } })
  }

  const handleOnChange = e => {
    setFormUsername(e.target.value)
  }

  return (
    <>
      <JoinTitle>Join Chat</JoinTitle>
      <Form onSubmit={handleSubmit}>
        <Label>Please enter your username</Label>
        <Input
          type='text'
          placeholder='username'
          onChange={handleOnChange}
          name='username'
        />
        <ButtonWrapper>
          <Button type='submit' disabled={connecting}>
            {connecting ? '...Connecting' : 'Next'}
          </Button>
        </ButtonWrapper>
      </Form>
    </>
  )
}

export default React.memo(Login)
