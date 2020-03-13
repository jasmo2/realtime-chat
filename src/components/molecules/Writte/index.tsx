import React, { useState, FormEvent, useEffect } from 'react'
import { Form, Input, Typing, Button } from './styles'
import { SocketsProps } from '~/components/organisms/Chat'

interface WritteProps extends SocketsProps {
  typers?: object
}

const Writte: React.FC<WritteProps> = props => {
  const { io, typers } = props
  const [typerWritting, setTyperWritting] = useState(null) as any
  const [message, setMessage] = useState('')
  const [typing, setTyping] = useState(false)
  let stopTypingTimeout: null | number | NodeJS.Timer = null

  // useEffect(() => {
  //   io.emit('typing', false)
  // }, [message])

  useEffect(() => {
    isTyping()
  }, [typers])

  useEffect(() => {
    if (typing) {
      io.emit('typing', true)
    } else {
      io.emit('typing', false)
    }
  }, [typing])

  const typingtimeout = () => {
    setTyping(false)
  }

  const startCountDown = () => {
    if (!typing) {
      setTyping(true)
    }
    clearTimeout(stopTypingTimeout as NodeJS.Timer)
    stopTypingTimeout = setTimeout(typingtimeout, 3300)
  }

  const endCountDown = () => {
    clearTimeout(stopTypingTimeout as NodeJS.Timer)
  }

  const handleOnChange = e => {
    setMessage(e.target.value)

    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      this.onSubmit()
    }
  }

  const getTypers = typers => {
    const maxUsersTyping = 1
    let whoIsTyping = ''
    let count = 0
    for (const user in typers) {
      if (typers.hasOwnProperty(user) && typers[user]) {
        if (maxUsersTyping === count) {
          whoIsTyping = 'People are'
          break
        }
        whoIsTyping = `${user} is`
        count += 1
      }
    }

    return whoIsTyping
  }

  const isTyping = () => {
    if (typing) {
      setTyperWritting(getTypers(typers))
    } else {
      setTyperWritting(null)
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('handleSubmit -> handleSubmit')
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='message'
          onChange={handleOnChange}
          onKeyUp={startCountDown}
          onKeyDown={endCountDown}
          name='message'
        />
        <Button type='submit'>Send</Button>
        <Typing>{typerWritting ? ` ${typerWritting} typing` : null}</Typing>
      </Form>
    </>
  )
  // <Typing>Pam is writting</Typing>
}

export default React.memo(Writte)
