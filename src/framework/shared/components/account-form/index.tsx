import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import { actions as accountsActions } from '@/framework/shared/redux/accounts'
import { Dispatch } from '../../redux/types'

const AccountForm: React.FC = () => {
  const [input, setInput] = useState('')

  // Dispatch
  const dispatch = useDispatch<Dispatch>()

  // Handlers
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value)
  }, [])

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    await dispatch(accountsActions.createAccountAsync(input)).then(async () => {
      await dispatch(accountsActions.loadAccountsAsync())
    })
  }, [input])

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">Criar</button>
    </form>)
}

export default AccountForm
