import features from '@/main/factories/features'

import CustomApp, { CustomAppProps } from '@/framework/pages/_app'

export const makeCustomApp = (): React.FC<CustomAppProps> => {
  return CustomApp(features)
}
