import 'cross-fetch/polyfill'

import * as React from 'react'
import Helmet from 'react-helmet'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import { resolvers } from '~/graphql/resolvers'

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  clientState: {
    defaults: {
      usernameData: {
        __typename: 'usernameData',
        username: ''
      },
      chatData: {
        __typename: 'chatData',
        onChat: false
      }
    },
    resolvers
  }
})

type Props = {
  children: React.ReactNode
}

const App = ({ children }: Props) => {
  return (
    <ApolloHooksProvider client={client}>
      <Helmet>
        <title>Gatsby ws:// chat</title>
        <meta
          name='description'
          content='real-time chat, using gatsby and socket.io'
        />
        <meta name='keywords' content='realtime, gatsby, socket.io' />
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, viewport-fit=cover, initial-scale=1, maximum-scale=1, minimum-scale=1, shrink-to-fit=no'
        />
      </Helmet>
      {children}
    </ApolloHooksProvider>
  )
}

export default App
