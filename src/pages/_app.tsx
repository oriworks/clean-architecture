import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { useStore } from '@/framework/shared/redux/store'
import features from '@/main/factories/features'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxStore, features)

  return (
        <Provider store={store}>
            <Component {...pageProps}/>
        </Provider>
  )
}

export default App
