import { Accounts } from '@/framework/models'
import { AsyncAction } from '@/framework/shared/redux/types'

import { ActionTypes } from './types'

export const loadAccountsAsync =
    (): AsyncAction<Accounts> => async (dispatch, getState, features) => {
      dispatch({ type: ActionTypes.LOAD_ACCOUNTS_START })
      return await features.loadAccounts()
        .then(accounts => {
          dispatch({ type: ActionTypes.LOAD_ACCOUNTS_SUCCESS, payload: accounts })
          return accounts
        })
        .catch(error => {
          dispatch({ type: ActionTypes.LOAD_ACCOUNTS_FAIL })
          throw error
        })
    }

export const createAccountAsync = (name: string): AsyncAction<void> => async (dispatch, getState, features) => {
  dispatch({ type: ActionTypes.SUBMIT_ACCOUNT_START })
  return await features.createAccount(name)
    .then(() => {
      dispatch({ type: ActionTypes.SUBMIT_ACCOUNT_SUCCESS })
    })
    .catch(error => {
      dispatch({ type: ActionTypes.SUBMIT_ACCOUNT_FAIL })
      throw error
    })
}
