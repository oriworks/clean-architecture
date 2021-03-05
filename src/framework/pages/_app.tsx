import React, { PropsWithChildren } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { Features } from '@/framework/features'
import { useStore } from '@/framework/shared/redux'
import { AppState } from '@/framework/shared/redux/types'

export interface PageProps {
  initialReduxState: AppState
}
export interface CustomAppProps extends AppProps {
  pageProps: PropsWithChildren<PageProps>
}

export interface NextSSR {
  getServerSideProps: GetServerSideProps<PageProps>
  page: NextPage
}

const CustomApp = (features: Features): React.FC<CustomAppProps> => {
  const App: React.FC<CustomAppProps> = ({ Component, pageProps }: CustomAppProps) => {
    const store = useStore(pageProps.initialReduxState, features)

    return (
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
    )
  }

  return App
}

export default CustomApp
