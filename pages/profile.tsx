import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

import HeaderComponent from '../components/Header/Header.component'
import { ProfileContainer } from '../styles/pages/Profile.styled'
import UserProfile from '../components/Profile/UserProfile'
import AdminProfile from '../components/Profile/AdminProfile'
import { checkAdmin } from '../web3/web3Utils'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const Profile: NextPage = () => {
  const [admin, setAdmin] = useState<boolean>(false)
  console.log();
  
  useEffect(() => {
      (async () => {
        const check = await checkAdmin()
        if(check) setAdmin(true)
        console.log("ADMIN",admin);
      })()
  }, [])
  
  
  return (
    <ApolloProvider client={client}>
    <ProfileContainer>
      <HeaderComponent/>
      { admin
        ? <AdminProfile/>
        : <UserProfile/>
      }
    </ProfileContainer>
    </ApolloProvider>
  )
}

export default Profile
