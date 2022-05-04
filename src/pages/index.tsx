import type { NextPage } from 'next'
import Head from 'next/head'
import { FormLogin } from '../components/FormLogin'


export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      
      <FormLogin/>
    </>
  )
}