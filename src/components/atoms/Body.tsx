import React, { useState, useEffect } from 'react'
import urlencode from 'urlencode'
import { Text, Gif } from '~/molecules/Message/styles'
import { GiphyFetch } from '@giphy/js-fetch-api'

import { GIPHY_KEY } from '~/constants'

const gf = new GiphyFetch(GIPHY_KEY)

export interface BodyProps {
  alt?: string | null
  text?: string
  type: string
  url?: string
}

const Body: React.FC<BodyProps> = props => {
  const { text, url, alt, type } = props

  return (
    <>
      {type === 'image' ? (
        <Gif src={url} alt={!Array.isArray(alt) ? alt! : ''} />
      ) : (
        <Text>{text}</Text>
      )}
    </>
  )
}

export default React.memo(Body)
