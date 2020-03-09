import * as React from 'react'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'

import Main from './templates/Main'
import { resolvers } from '../../graphql/resolvers'

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
  children?: React.ReactNode
}

const App = (props: Props) => {
  return (
    <ApolloHooksProvider client={client}>
      <Main />
    </ApolloHooksProvider>
  )
}

export default App
