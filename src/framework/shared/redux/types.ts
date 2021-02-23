import { Reducer, Store } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { Features } from '@/framework/features'

import { Actions as AccountsActions, State as AccountsState } from './accounts/types'

const DEFAULT_ACTION_TYPE = 'DEFAULT_ACTION_TYPE'
interface DefaultAction { type: typeof DEFAULT_ACTION_TYPE }

export const defaultAction: DefaultAction = { type: DEFAULT_ACTION_TYPE }

export type Actions = DefaultAction | AccountsActions
export interface AppState { accounts: AccountsState }

export type AppReducer = Reducer<AppState, Actions>
export type AsyncAction<R> = ThunkAction<Promise<R>, AppReducer, Features, Actions>
export type Dispatch = ThunkDispatch<AppReducer, Features, Actions>

export type AppStore = Store<AppState> & { dispatch: Dispatch }
