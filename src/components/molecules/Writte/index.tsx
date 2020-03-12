import React, { useState, FormEvent, useEffect } from 'react'
import { Form, Input, Typing, Button } from './styles'
import { SocketsProps } from '~/components/organisms/Chat'

interface WritteProps extends SocketsProps {}
const Writte: React.FC<WritteProps> = props => {
  const { io } = props
  const [message, setMessage] = useState('')
  const [typers, setTypers] = useState({})

  useEffect(() => {
    io.emit('typing', false)
  }, [message])

  io.on('is-typing', typers => {
    /* <typers> is a map where the `key` is the <username> and the value
     *  is a `boolean` that is `true` if the user is typing and `false` if not.
     */
    setTypers({ ...typers })
  })

  const getTyper = typers => {
    console.log('getTyper -> typers', typers)
  }

  const handleOnChange = e => {
    setMessage(e.target.value)
    io.emit('typing', true)
    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      this.onSubmit()
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
          name='message'
        />
        <Button type='submit'>Send</Button>
        <Typing>{getTyper(typers)} is writting</Typing>
      </Form>
    </>
  )
  // <Typing>Pam is writting</Typing>
}

export default React.memo(Writte)
