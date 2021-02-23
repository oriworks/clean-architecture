import axios from 'axios'
import { v4 as uuidV4 } from 'uuid'
import { Accounts } from '@/framework/models'
import { Features } from '@/framework/features'

const loadAccounts = async (): Promise<Accounts> =>
  await axios.get<Accounts>('http://localhost:7777/accounts').then(r => r.data)

const createAccount = async (name: string): Promise<void> =>
  await axios.post('http://localhost:7777/accounts', { uuid: uuidV4(), name }).then(console.log)

const features: Features = { loadAccounts, createAccount }

export default features
