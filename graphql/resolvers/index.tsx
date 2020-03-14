const setUsername = (_, { username }, { cache }) => {
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

const setGif = (_, { queryGif }, { cache }) => {
  console.log('setGif -> queryGif', queryGif)
  const data = {
    gifQuery: {
      __typename: 'gifQuery',
      queryGif
    }
  }

  cache.writeData({
    data
  })

  return null
}

export const resolvers = {
  Mutation: {
    setGif,
    setIsOnChat,
    setUsername
  }
}
