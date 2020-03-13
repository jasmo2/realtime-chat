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

  useEffect(() => {
    io.emit('typing', false)
  }, [message])

  useEffect(() => {
    if (typing) {
      // io.emit('typing', true)
    } else {
      // io.emit('typing', true)
    }
  }, [typing])

  useEffect(() => {
    if (typing) {
      setTyperWritting(typers)
      io.emit('typing', true)
    } else {
      setTyperWritting(null)
      io.emit('typing', false)
    }
  }, [typers])

  const handleOnChange = e => {
    setMessage(e.target.value)
    if (!typing) {
      setTyping(true)
    }

    stopTypingTimeout = setTimeout(() => {
      setTyping(false)
    }, 500)

    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      this.onSubmit()
    }
  }

  const getTypers = typers => {
    console.log('getTyper -> typers', typers)
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
          name='message'
        />
        <Button type='submit'>Send</Button>
        <Typing>
          {typerWritting ? ` ${typerWritting} is writting` : null}
        </Typing>
      </Form>
    </>
  )
  // <Typing>Pam is writting</Typing>
}

export default React.memo(Writte)
