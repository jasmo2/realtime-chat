import styled from '@emotion/styled'
import { H2, H5, Text, placeholder } from '~/atoms/Typography'

export const JoinTitle = styled.h2`
  ${H2}
  text-align: left;
  width: 100%;
`

export const Form = styled.form`
  margin-top: 40px;
  display: block;
`

export const Label = styled.label`
  ${H5}
  display: inherit;
  margin-bottom: 4px;
`

export const Input = styled.input`
  ${Text}
  border-radius: 8px;
  border: solid 1px #c6c6c6;
  color: black;
  display: inherit;
  height: 40px;
  margin-bottom: 40px;
  padding-left: 12px;
  width: 100%;

  ${placeholder}
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const Button = styled.button`
  ${H5}
  background-color: #FF8203;
  border-radius: 4px;
  border: unset;
  color: white;
  height: 40px;
  transition: width 0.4s;
  width: 100px;

  &:disabled {
    cursor: progress;
    background-color: darkgray;
    width: 150px;
  }
`
