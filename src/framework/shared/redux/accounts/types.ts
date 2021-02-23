
import { Accounts } from '@/framework/models'

export enum ActionTypes {
  LOAD_ACCOUNTS_START = 'LOAD_ACCOUNTS_START',
  LOAD_ACCOUNTS_SUCCESS = 'LOAD_ACCOUNTS_SUCCESS',
  LOAD_ACCOUNTS_FAIL = 'LOAD_ACCOUNTS_FAIL',
  SUBMIT_ACCOUNT_START = 'SUBMIT_ACCOUNT_START',
  SUBMIT_ACCOUNT_SUCCESS = 'SUBMIT_ACCOUNT_SUCCESS',
  SUBMIT_ACCOUNT_FAIL = 'SUBMIT_ACCOUNT_FAIL',
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

interface SubmitAccountStart {
  type: ActionTypes.SUBMIT_ACCOUNT_START
}

interface SubmitAccountSuccess {
  type: ActionTypes.SUBMIT_ACCOUNT_SUCCESS
}

interface SubmitAccountFail {
  type: ActionTypes.SUBMIT_ACCOUNT_FAIL
}

export type Actions = LoadAccountsStart | LoadAccountsSuccess | LoadAccountsFail | SubmitAccountStart | SubmitAccountSuccess | SubmitAccountFail

export interface State {
  isLoading: boolean
  data: Accounts
}
