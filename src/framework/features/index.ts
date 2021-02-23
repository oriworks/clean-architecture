import { CreateAccount, LoadAccounts } from './account'

export interface Features {
  loadAccounts: LoadAccounts
  createAccount: CreateAccount
}
