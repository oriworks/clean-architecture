import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Page, { PageProps } from './page'
import { Features } from '@/framework/features'
import { selectors as accountsSelectors, actions as accountsActions } from '@/framework/shared/redux/accounts'
import { initializeStore } from '@/framework/shared/redux'

export interface NextSSR<P> {
  getServerSideProps: GetServerSideProps<P>
  Page: NextPage<P>
}

const PageSSR = (features: Features): NextSSR<PageProps> => {
  const PageWithSSR: NextPage<PageProps> = () => (<Page />)

  const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
    const reduxStore = initializeStore({}, features)

    await reduxStore.dispatch(accountsActions.loadAccountsAsync())

    return { props: { initialReduxState: reduxStore.getState() } }
  }

  return {
    getServerSideProps,
    Page: PageWithSSR
  }
}

export default PageSSR
