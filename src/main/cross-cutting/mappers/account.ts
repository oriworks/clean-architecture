import { AccountDto } from 'app/models'
import { AccountModel } from 'domain/entities'
import { MapperConstructor } from './mapper'

interface Account {
  uuid: string
}

export const AccountMapper: MapperConstructor<Account, AccountDto, AccountModel> = {
  toDto (account: AccountModel): AccountDto {
    return {
      uuid: account.uuid,
      name: ''
    }
  },
  toPersistence (account: AccountModel): Account {
    return {
      uuid: account.uuid
    }
  },
  toDomain (account: Account): AccountModel {
    return {
      uuid: account.uuid,
      balance: 100,
      lastUpdated: new Date()
    }
  }
}
