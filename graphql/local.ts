import { gql } from 'apollo-boost'

export const MUTATION_USERNAME = gql`
  mutation setUsername($username: String) {
    setUsername(username: $username) @client
  }
`

export const QUERY_USERNAME = gql`
  query usernameData {
    usernameData @client {
      username
    }
  }
`

export const MUTATION_GIF = gql`
  mutation setGif($queryGif: String) {
    setGif(queryGif: $queryGif) @client
  }
`

export const QUERY_GIF = gql`
  query gifQuery {
    gifQuery @client {
      queryGif
    }
  }
`

export const MUTATION_CHAT = gql`
  mutation setIsOnChat($onChat: Boolean = false) {
    setIsOnChat(onChat: $onChat) @client
  }
`

export const QUERY_CHAT = gql`
  query chatData {
    chatData @client {
      onChat
    }
  }
`
