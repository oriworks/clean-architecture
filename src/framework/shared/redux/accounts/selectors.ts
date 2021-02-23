import { get } from 'lodash'

import { getters } from './reducer'

import { AppReducer } from '../types'
import { State } from './types'
import { Accounts } from '@/framework/models'

const getFromState = (state: AppReducer): State => get(state, 'accounts')

export const getIsLoading = (state: AppReducer): boolean => getters.isLoading(getFromState(state))
export const getData = (state: AppReducer): Accounts => getters.data(getFromState(state))
