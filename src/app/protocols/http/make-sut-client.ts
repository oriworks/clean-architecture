import { HttpGetClient } from './client'

export const makeHttpClientSut = <R>(response: R): HttpGetClient<R> => ({
  execute: jest.fn(async (url: string) => await Promise.resolve(response))
})
