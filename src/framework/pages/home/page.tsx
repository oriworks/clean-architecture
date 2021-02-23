import React from 'react'

import AccountList from '@/framework/shared/components/account-list'
import AccountForm from '@/framework/shared/components/account-form'

const Page: React.FC = () => {
  return (
        <main>
          <h1>Page</h1>
          <AccountList />
          <AccountForm />
        </main>
  )
}

export default Page
