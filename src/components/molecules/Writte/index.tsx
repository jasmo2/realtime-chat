import React, { useState, FormEvent, useEffect, useRef } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { GiphyFetch } from '@giphy/js-fetch-api'

import { Form, Input, Typing, Button } from './styles'
import { SocketsProps } from '~/components/organisms/Chat'
import { MUTATION_GIF } from '~/graphql/local'
import { GIPHY_KEY } from '~/constants'

interface WritteProps extends SocketsProps {
  typers?: object
}

const gf = new GiphyFetch(GIPHY_KEY)
const GIF_REGEX = /\/gif ([^\s]+)/
const Writte: React.FC<WritteProps> = props => {
  const { io, typers } = props
  const formRef = useRef(null)
  const [typerWritting, setTyperWritting] = useState<string | null>(null)
  const [queryGif, setGifQuery] = useState<string | null>(null)
  const [message, setMessage] = useState('')
  const [typing, setTyping] = useState(false)
  const [setGif] = useMutation(MUTATION_GIF)

  let stopTypingTimeout: null | number | NodeJS.Timer = null

  io.on('is-typing', typers => {
    setTyperWritting(getTypers(typers))
  })

  useEffect(() => {
    isTyping()
  }, [typers])

  useEffect(() => {
    if (typing) {
      io.emit('typing', true)
    } else {
      setTimeout(() => {
        if (!typing) {
          io.emit('typing', false)
        }
      }, 300)
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
    const text = e.target.value
    if (GIF_REGEX.test(text)) {
      setMessage('')
      const query = text.substring(4)
      setGifQuery(query)
    } else {
      setMessage(text)
    }
    // '/gif'

    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      handleSubmit(e)
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('handleSubmit -> handleSubmit', message)
    //@ts-ignore
    formRef!.current.reset()

    if (queryGif) {
      const { data: gifs } = await gf.search('dogs', {
        limit: 10,
        sort: 'relevant',
        type: 'gifs'
      })

      const rndGifs = gifs[Math.random() * (9 - 0)]
      console.log('TCL: handleSubmit -> rndGifs', rndGifs)

      // io.emit('image-message', { url, alt })
    } else {
      io.emit('text-message', message)
      setMessage('')
    }
  }

  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
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
}

export default React.memo(Writte)
