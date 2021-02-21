import { Reducer } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { Features } from '@/framework/features'

import { Actions as AccountsActions, State as AccountsState } from './accounts/types'

const DEFAULT_ACTION_TYPE = 'DEFAULT_ACTION_TYPE'
interface DefaultAction { type: typeof DEFAULT_ACTION_TYPE }

export const defaultAction: DefaultAction = { type: DEFAULT_ACTION_TYPE }

export type Actions = DefaultAction | AccountsActions
export type AppState = Reducer<{ accounts: AccountsState }, Actions>
export type AsyncAction<R> = ThunkAction<Promise<R>, AppState, Features, Actions>
