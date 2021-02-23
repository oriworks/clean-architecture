import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { configureStore, appReducer } from '@/framework/shared/redux'
import { Features } from '@/framework/features'

const App = (features: Features) => ({ Component, pageProps, reduxStore }: AppProps): JSX.Element => {
  const store = configureStore(appReducer, {}, features)

  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  )
}

export default App
