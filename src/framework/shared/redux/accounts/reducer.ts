import { Accounts } from '@/framework/models'
import { combineReducers, Reducer } from 'redux'

import { Actions, defaultAction } from '../types'
import { ActionTypes, State } from './types'

const initialState: State = {
  isLoading: false,
  data: []
}

const isLoading: Reducer<boolean, Actions> = (state: boolean = initialState.isLoading, action: Actions = defaultAction): boolean => {
  switch (action.type) {
    case ActionTypes.LOAD_ACCOUNTS_START:
      return true
    case ActionTypes.LOAD_ACCOUNTS_FAIL:
    case ActionTypes.LOAD_ACCOUNTS_SUCCESS:
      return false
    default:
      return state
  }
}

const data: Reducer<Accounts, Actions> = (state: Accounts = initialState.data, action: Actions = defaultAction): Accounts => {
  switch (action.type) {
    case ActionTypes.LOAD_ACCOUNTS_FAIL:
    case ActionTypes.LOAD_ACCOUNTS_START:
      return initialState.data
    case ActionTypes.LOAD_ACCOUNTS_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  isLoading: isLoading,
  data
})
