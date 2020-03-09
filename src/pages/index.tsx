import React from 'react'
import Main from '~/components/templates/Main'

interface IndexPageProps {
  data: any
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }

  public render() {
    return <Main />
  }
}
