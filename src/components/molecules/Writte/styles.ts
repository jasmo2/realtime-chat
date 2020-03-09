import styled from '@emotion/styled'
import {
  Form as FormL,
  Input as InputL
} from '~/components/molecules/Login/styles'
import { commonStyles, Text } from '~/components/atoms/Typography'

export const Form = styled(FormL)`
  bottom: 0;
  height: 94px;
  position: absolute;
  width: calc(100% - 40px - 24px);
`

export const Input = styled(InputL)`
  margin: 0 0 8px 0;
`

export const Typing = styled.label`
  ${commonStyles}
  color: #c6c6c6;
  font-size: 12px;
  font-weight: 300;
  margin: 0;
`

export const Button = styled.button`
  ${Text}
  background-color: transparent;
  border-radius: 8px;
  border: unset;
  color: #c6c6c6;
  height: 42px;
  position: absolute;
  right: -15px;
  top: 1px;
  transition: background-color 400ms;
  width: 70px;

  &:hover {
    background-color: #9a9a9a;
  }
`
