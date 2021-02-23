import { AnyAction, applyMiddleware, createStore, PreloadedState, Reducer, Store } from 'redux'
import thunk, { ThunkDispatch, ThunkMiddleware } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { Features } from '@/framework/features'

import { AppState, AppStore } from './types'
import { appReducer } from '.'
import { useMemo } from 'react'

const isServer = typeof window === 'undefined'
let store: AppStore

type Dispatch<S, E> = ThunkDispatch<S, E, AnyAction>
type ConfigureStore<S, E> = Store<S> & { dispatch: Dispatch<S, E> }

const configureStore = <S, E>(reducer: Reducer<S>, preloadedState: PreloadedState<S>, extraArgument: E): ConfigureStore<S, E> => {
  const thunkMiddleware: ThunkMiddleware<S, AnyAction, E> = thunk.withExtraArgument<E>(extraArgument)
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware<Dispatch<S, E>, S>(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(reducer, preloadedState, composedEnhancers)

  return store
}

export const initStore = (initialState: AppState, features: Features): AppStore => {
  return configureStore(appReducer, initialState, features)
}

export const initializeStore = (initialState: AppState, features: Features): AppStore => {
  // if (isServer) {
  //   return initStore(initialState, features)
  // }
  let _store = store ?? initStore(initialState, features)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (initialState && store) {
    _store = initStore({
      ...store.getState(),
      ...initialState
    }, features)
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export const useStore = (initialState: AppState, features: Features): AppStore => {
  const store = useMemo(() => initializeStore(initialState, features), [initialState])
  return store
}
