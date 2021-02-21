
import { Accounts } from '@/framework/models'

export enum ActionTypes {
  LOAD_ACCOUNTS_START = 'LOAD_ACCOUNTS_START',
  LOAD_ACCOUNTS_SUCCESS = 'LOAD_ACCOUNTS_SUCCESS',
  LOAD_ACCOUNTS_FAIL = 'LOAD_ACCOUNTS_FAIL'
}

interface LoadAccountsStart {
  type: ActionTypes.LOAD_ACCOUNTS_START
}

interface LoadAccountsSuccess {
  type: ActionTypes.LOAD_ACCOUNTS_SUCCESS
  payload: Accounts
}

interface LoadAccountsFail {
  type: ActionTypes.LOAD_ACCOUNTS_FAIL
}

export type Actions = LoadAccountsStart | LoadAccountsSuccess | LoadAccountsFail

export interface State {
  isLoading: boolean
  data: Accounts
}
