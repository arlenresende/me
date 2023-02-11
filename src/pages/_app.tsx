import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/styles/pages/app'

import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { PrismicProvider } from '@prismicio/react'
import { client } from '../services/prismic'
import { useRouter } from 'next/router'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  return (
    <PrismicProvider client={client}>
      <Container className={pathname === '/' ? 'container-home' : ''}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </PrismicProvider>
  )
}
