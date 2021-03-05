import { Features } from '@/framework/features'
import { initializeStore } from '@/framework/shared/redux'
import { actions as accountsActions } from '@/framework/shared/redux/accounts'
import { NextSSR } from '@/framework/pages/_app'

import Page from './page'

const PageSSR = (features: Features): NextSSR => ({
  getServerSideProps: async (context) => {
    const reduxStore = initializeStore({}, features)

    await reduxStore.dispatch(accountsActions.loadAccountsAsync())

    return { props: { initialReduxState: reduxStore.getState() } }
  },
  page: Page
})

export default PageSSR
