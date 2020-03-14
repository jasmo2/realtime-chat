import styled from '@emotion/styled'
import { H5, Text as PText } from '~/atoms/Typography'

export const Section = styled.section`
  align-items: flex-start;
  display: flex;
  margin-bottom: 24px;
  width: 100%;
`

const avatarSize = 42
export const Avatar = styled.img`
  background-color: darkgray;
  border-radius: 8px;
  height: ${avatarSize}px;
  margin-right: 16px;
  object-fit: contain;
  width: ${avatarSize}px;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Username = styled.h5`
  ${H5}
  margin-bottom: 4px;
`

export const Text = styled.p`
  ${PText}
  margin-bottom: 4px;
`
