import { css } from '@emotion/core'

export const commonStyles = css`
  font-family: 'Arial';
  margin: 0;
`

export const H2 = css`
  font-size: 32px;
  font-weight: 300;
`

export const Text = css`
  ${commonStyles}
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1.26px;
`

export const H5 = css`
  ${commonStyles}
  ${Text}
  font-weight: bold;
`

export const placeholder = css`
  &::placeholder {
    color: #c6c6c6;
  }
`
