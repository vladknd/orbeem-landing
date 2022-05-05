import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import '../styles/globals.css'
import '../styles/fonts/fonts.css'

import { UserProvider} from '../auth/userContext'
import { graphClient } from '../graphql'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={graphClient}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ApolloProvider>
  )
}

export default MyApp


