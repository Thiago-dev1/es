import type { NextPage } from 'next'
import Head from 'next/head'
import { FormLogin } from './FormLogin'





export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      
      <FormLogin />
    </>
  )
}