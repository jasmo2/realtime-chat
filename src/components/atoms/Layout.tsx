import React from 'react'
import get from 'ts-get'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useQuery } from '@apollo/react-hooks'

import { QUERY_USERNAME, QUERY_CHAT } from '~/graphql/local'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = props => {
  const { children } = props
  const { data } = useQuery(QUERY_CHAT)
  const isOnChat = get(data, it => it.chatData.onChat, false)

  return <Container isOnChat={isOnChat}>{children}</Container>
}

export default React.memo(Layout)

type LayoutStyleProps = {
  isOnChat: boolean
}

const loginPadding = css`
  padding: 40px;
`

const pg = 24
const chatPadding = css`
  position: relative;
  padding: ${pg}px ${pg}px 94px;
`

export const Container = styled.div<LayoutStyleProps>`
  /*
   * Based on the designs 
   * 276px is the sum of
   * 40+32+40+4+40+40+40+40  
   */
  border-radius: 5px;
  border: solid 1px #9b9b9b;
  box-shadow: 0px 5px 7px 0px #c6c6c6;
  min-height: 276px;
  width: 600px;

  ${({ isOnChat }) => (isOnChat ? chatPadding : loginPadding)}
`
