import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { Header } from './Header'




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )


}

export default MyApp
