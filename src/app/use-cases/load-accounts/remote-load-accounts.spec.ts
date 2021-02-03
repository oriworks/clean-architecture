import { HttpGetClient } from 'app/protocols/http/client'
import { makeHttpClientSut } from '../../protocols/http/make-sut-client'
import { AccountModelCollection } from 'domain/entities'
import { LoadAccounts } from 'domain/use-cases/load-accounts'

import faker from 'faker'

class RemoteLoadAccounts implements LoadAccounts {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<AccountModelCollection>
  ) {}

  async execute (): Promise<AccountModelCollection> {
    return await this.httpGetClient.execute(this.url)
  }
}

interface SutType {
  sut: RemoteLoadAccounts
  url: string
  httpGetClientSpy: HttpGetClient<AccountModelCollection>
}

const makeSut = (url: string = faker.internet.url()): SutType => {
  const httpGetClientSpy = makeHttpClientSut([])
  const sut = new RemoteLoadAccounts(url, httpGetClientSpy)

  return {
    sut,
    url,
    httpGetClientSpy
  }
}

describe('RemoteLoadAccounts', () => {
  test('should call HttpGetClient with correct URL', async () => {
    const { sut, url, httpGetClientSpy } = makeSut()

    await sut.execute()

    expect(httpGetClientSpy.execute).toHaveBeenCalledWith(url)
  })
})
