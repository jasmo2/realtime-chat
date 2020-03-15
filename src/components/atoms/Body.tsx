import React, { useState, useEffect } from 'react'
import urlencode from 'urlencode'
import { Text, Gif } from '~/molecules/Message/styles'
import { GiphyFetch } from '@giphy/js-fetch-api'

import { GIPHY_KEY } from '~/constants'

const gf = new GiphyFetch(GIPHY_KEY)

export interface BodyProps {
  text?: string | string[]
  url?: string | string[]
  alt?: string | string[] | null
}

const Body: React.FC<BodyProps> = props => {
  const { text, url, alt } = props

  return (
    <>
      {url ? (
        !Array.isArray(url) ? (
          <Gif src={url} alt={!Array.isArray(alt) ? alt! : ''} />
        ) : (
          url.map((uri, idx) => <Gif src={uri} alt={alt![idx]} />)
        )
      ) : !Array.isArray(text) ? (
        <Text>{text}</Text>
      ) : (
        text.map(t => <Text>{text}</Text>)
      )}
    </>
  )
}

export default React.memo(Body)
