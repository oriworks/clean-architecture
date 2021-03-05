import { makeHomePageSSR } from '@/main/factories/pages/home'

const HomePageSSR = makeHomePageSSR()

export const { getServerSideProps } = HomePageSSR

export default HomePageSSR.page
