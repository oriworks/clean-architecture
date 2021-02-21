import { PageProps } from '@/framework/pages/home/page'
import PageSSR from '@/framework/pages/home/page-ssr'
import { Account } from '@/framework/shared/contexts/features/features-context'
import { NextPage } from 'next'

const loadAccounts = async (): Promise<Account[]> =>
  await new Promise(
    resolve => setTimeout(
      () => { resolve([{ uuid: '1', name: 'joel' }]) },
      500
    )
  )

export const makeHomePageSSR = (): NextPage<PageProps> => {
  return PageSSR({ features: { loadAccounts } })
}
