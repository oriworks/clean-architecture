import { PageProps } from '@/framework/pages/home/page'
import PageSSR, { NextSSR } from '@/framework/pages/home/page-ssr'
import features from '../features'

export const makeHomePageSSR = (): NextSSR<PageProps> => {
  return PageSSR(features)
}
