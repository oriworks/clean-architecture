import React from 'react'
import { NextPage } from 'next'
import Page, { PageProps } from './page'

const PageSSR = (props: PageProps): NextPage<PageProps> => {
  const PageWithSSR: NextPage<PageProps> = (homeProps: PageProps) => (<Page {...homeProps} />)

  PageWithSSR.getInitialProps = async () => {
    const accounts = await props.features.loadAccounts()
    return {
      features: props.features,
      accounts
    }
  }

  return PageWithSSR
}

export default PageSSR
