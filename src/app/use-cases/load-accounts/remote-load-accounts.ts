import { AccountMapper } from 'main/cross-cutting/mappers'
import { AccountService } from 'app/services'
import { AccountModelCollection } from 'domain/entities'
import { LoadAccounts } from 'domain/use-cases/load-accounts'

export class RemoteLoadAccounts implements LoadAccounts {
  constructor (private readonly accountService: AccountService) {}

  public async execute (): Promise<AccountModelCollection> {
    const accounts = await this.accountService.load()
    return accounts.map(AccountMapper.toDomain)
  }
}
