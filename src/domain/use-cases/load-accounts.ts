import { AccountModelCollection } from 'domain/entities'

export interface LoadAccounts {
  execute: () => Promise<AccountModelCollection>
}
