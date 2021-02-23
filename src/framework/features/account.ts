import { Accounts } from '@/framework/models'

export type LoadAccounts = () => Promise<Accounts>

export type CreateAccount = (name: string) => Promise<void>
