import { combineReducers } from 'redux'

import { AppState } from './types'

import accountsReducer from './accounts'

export * from './store'

export const appReducer: AppState = combineReducers({
  accounts: accountsReducer
})
