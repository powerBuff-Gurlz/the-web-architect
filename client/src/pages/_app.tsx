import 'tailwindcss/tailwind.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import '../styles/global.css'

NProgress.configure({
  showSpinner: false,
  easing: 'ease',
  speed: 500,
})

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />
}

export default MyApp
