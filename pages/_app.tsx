import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import '../styles/globals.css'
import '../styles/fonts/fonts.css'
import { Web3Provider } from '../context/web3.context'

import { UserProvider} from '../auth/userContext'
import { graphClient } from '../graphql'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
    <ApolloProvider client={graphClient}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ApolloProvider>
    </Web3Provider>
  )
}

export default MyApp


