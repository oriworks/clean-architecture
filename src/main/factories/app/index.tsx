import axios from 'axios'
import { v4 as uuidV4 } from 'uuid'
import { AppProps } from 'next/app'

import { Accounts } from '@/framework/models'
import App from '@/framework/pages/_app'

const loadAccounts = async (): Promise<Accounts> =>
  await axios.get<Accounts>('http://localhost:7777/accounts').then(r => r.data)

const createAccount = async (name: string): Promise<void> =>
  await axios.post('http://localhost:7777/accounts', { uuid: uuidV4(), name }).then(console.log)

export const makeApp = (): (app: AppProps) => JSX.Element => {
  return App({ loadAccounts, createAccount })
}
