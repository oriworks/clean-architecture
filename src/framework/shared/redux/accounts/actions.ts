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
