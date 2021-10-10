import type { AppProps } from 'next/app'

import '../styles/globals.css'
import '../styles/Home.scss'

import '../App/components/Header/Header.scss'
import '../App/components/Footer/Footer.scss'
import '../App/components/auth/auth.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
