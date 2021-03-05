import { combineReducers } from 'redux'

import { AppReducer } from './types'

import accountsReducer, { initialState as accountsInitialState } from './accounts'

export * from './store'

export const appReducer: AppReducer = combineReducers({
  accounts: accountsReducer
})

export const appInitialState = {
  accounts: accountsInitialState
}
