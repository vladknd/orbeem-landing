import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

import HeaderComponent from '../components/Header/Header.component'
import { ProfileContainer } from '../styles/pages/Profile.styled'
import UserProfile from '../components/Profile/UserProfile'
import AdminProfile from '../components/Profile/AdminProfile'
import { useAuthorize } from '../auth/auth.module'
import { LoadingContainer } from '../styles/Components.styled'
import Image from 'next/image'
// import {checkAdmin} from '../web3/web3Utils'
import { useWeb3 } from '../services/web3.services'


const Profile: NextPage = () => {
  //ROLE-CHECKING:
  // const [admin, setAdmin] = useState<boolean>(false)
  // const [authorized, loading] = useAuthorize()
  
  // useEffect(()=> {
  //   checkAdmin().then(result => {
  //     if(result) setAdmin(true)
  //   })
  // },[])
  
  const {connectWeb3, publicAddress} = useWeb3()
  if(!publicAddress) return (
    <LoadingContainer>
      <Image src="/loading.svg" width={200} height={200}/>
    </LoadingContainer>
  )
  
  return (
    <ProfileContainer>
      <HeaderComponent/>
      <UserProfile/>
    </ProfileContainer>
  )
}

export default Profile
