import { AccountCollectionDto } from 'app/models'

export interface AccountService {
  load: () => Promise<AccountCollectionDto>
}
