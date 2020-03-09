import React, { useState, FormEvent, Dispatch, SetStateAction } from 'react'
import { Form, Input, Typing, Button } from './styles'

interface FormProps {
  handleSubmit: Function
  handleOnChange: Function
}
const Writte: React.FC = props => {
  const [message, setMessage] = useState('')

  const handleOnChange = e => {
    setMessage(e.target.value)
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
          placeholder='username'
          onChange={handleOnChange}
          name='username'
        />
        <Button type='submit'>Send</Button>
        <Typing>Pam is writting</Typing>
      </Form>
    </>
  )
}

export default React.memo(Writte)
