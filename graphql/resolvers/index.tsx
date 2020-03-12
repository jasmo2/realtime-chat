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

// const setSocket = (_, { socket }, { cache }) => {
//   console.log('setSocket -> socket', socket)
//   const data = {
//     socketInstace: {
//       __typename: 'socketInstace',
//       socket
//     }
//   }

//   cache.writeData({
//     data
//   })

//   return null
// }

export const resolvers = {
  Mutation: {
    setIsOnChat,
    // setSocket,
    setUsername
  }
}
