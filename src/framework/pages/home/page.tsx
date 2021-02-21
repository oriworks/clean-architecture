import { Features } from '@/framework/features'
import { Accounts } from '@/framework/models'
import { configureStore, appReducer } from '@/framework/shared/redux'
import React from 'react'
import { Provider } from 'react-redux'

export interface PageProps {
  features: Features
  accounts: Accounts
}

const Page: React.FC<PageProps> = ({ features, accounts }: PageProps) => {
  const store = configureStore(appReducer, { accounts: { isLoading: false, data: accounts } }, features)

  return (
    <Provider store={store}>
        <main>
          <h1>Page</h1>
          <ul>
            {accounts.map(account => <li key={account.uuid}>{account.name}</li>)}
          </ul>
        </main>
    </Provider>
  )
}

export default Page
