import { makeHomePageSSR } from '@/main/factories/pages/home'

const { Page, getServerSideProps: GetServerSideProps } = makeHomePageSSR()

export const getServerSideProps = GetServerSideProps

export default Page
