import { combineReducers } from 'redux'

import { AppReducer } from './types'

import accountsReducer from './accounts'

export * from './store'

export const appReducer: AppReducer = combineReducers({
  accounts: accountsReducer
})
