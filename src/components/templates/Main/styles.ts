import styled from '@emotion/styled'

type ContainerProps = {
  isOnChat: boolean
}

export const Container = styled.section<ContainerProps>`
  align-items: ${({ isOnChat }) => (isOnChat ? 'baseline' : 'center')};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`
