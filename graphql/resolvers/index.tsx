import get from 'ts-get'
import {} from '~/graphql/local'

const setUsername = (_, { username }, { cache }) => {
  console.log('setUsername -> username', username)
  const data = {
    usernameData: {
      __typename: 'usernameData',
      username
    }
  }

  cache.writeData({
    data
  })

  return null
}

const setIsOnChat = (_, { onChat }, { cache }) => {
  const data = {
    chatData: {
      __typename: 'chatData',
      onChat
    }
  }

  cache.writeData({
    data
  })

  return null
}

export const resolvers = {
  Mutation: {
    setIsOnChat,
    setUsername
  }
}
