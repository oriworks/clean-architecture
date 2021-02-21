import { AnyAction, applyMiddleware, createStore, PreloadedState, Reducer, Store } from 'redux'
import thunk, { ThunkDispatch, ThunkMiddleware } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export type Dispatch<S, E> = ThunkDispatch<S, E, AnyAction>
export type AppStore<S, E> = Store<S> & { dispatch: Dispatch<S, E> }

export const configureStore = <S, E>(reducer: Reducer<S>, preloadedState: PreloadedState<S>, extraArgument: E): AppStore<S, E> => {
  const thunkMiddleware: ThunkMiddleware<S, AnyAction, E> = thunk.withExtraArgument<E>(extraArgument)
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware<Dispatch<S, E>, S>(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(reducer, preloadedState, composedEnhancers)

  return store
}
