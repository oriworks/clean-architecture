import features from '@/main/factories/features'

import PageSSR from '@/framework/pages/home'
import { NextSSR } from '@/framework/pages/_app'

export const makeHomePageSSR = (): NextSSR => {
  return PageSSR(features)
}
