import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectors as accountsSelectors, actions as accountsActions } from '@/framework/shared/redux/accounts'

const AccountList: React.FC = () => {
  const accountsStore = useSelector(accountsSelectors.getData)

  // Dispatch
  const dispatch = useDispatch()

  // Handlers
  const handleLoadAccounts = useCallback(async () => {
    await dispatch(accountsActions.loadAccountsAsync())
  }, [dispatch])

  return (
    <div>
      <ul>
          {accountsStore.map(account => <li key={account.uuid}>{account.name}</li>)}
      </ul>
      <button onClick={handleLoadAccounts}>Atualizar</button>
    </div>
  )
}

export default AccountList
