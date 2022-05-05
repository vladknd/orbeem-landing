import { useState } from 'react'
import type { NextPage } from 'next'

import HeaderComponent from '../components/Header/Header.component'
import { ProfileContainer } from '../styles/pages/Profile.styled'
import UserProfile from '../components/Profile/UserProfile'
import AdminProfile from '../components/Profile/AdminProfile'
import { useAuthorize } from '../auth/auth.module'



const Profile: NextPage = () => {
  //ROLE-CHECKING:
  const [admin, setAdmin] = useState<boolean>(false)
  const [authorized, loading] = useAuthorize()

  if(loading || !authorized) return(<div>LOADING</div>)
  
  return (
    <ProfileContainer>
      <HeaderComponent/>
      { admin
        ? <AdminProfile/>
        : <UserProfile/>
      }
    </ProfileContainer>
  )
}

export default Profile
