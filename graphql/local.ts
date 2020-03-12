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

// export const MUTATION_SOCKET = gql`
//   mutation setSocket($socket: Any) {
//     setSocket(socket: $socket) @client
//   }
// `

// export const QUERY_SOCKET = gql`
//   query socketInstace {
//     socketInstace @client {
//       socket
//     }
//   }
// `

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
