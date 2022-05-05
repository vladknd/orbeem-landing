import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useMediaQuery } from 'react-responsive'

import CommunityComponent from '../components/Community/Community.component'
import HeaderComponent from '../components/Header/Header.component'
import WelcomeComponent from '../components/Welcome/Welcome.component'
import InfoComponent from '../components/Info/Info.component'
import RoadmapComponent from '../components/Roadmap/Roadmap.component'
import FooterComponent from '../components/Footer/Footer.component'

import { 
  IndexContainer 
} from '../styles/pages/Index.styled'
import EcosystemComponent from '../components/Ecosystem/Ecosystem.component'
import { getAccount } from '../web3/web3Utils'

const Home: NextPage = () => {
  //ADAPTIVE:
  const isMobile = useMediaQuery({ query: '(min-width: 1000px)' })
  useEffect(() => {
  }, [isMobile])
  
  return (
    <IndexContainer>
      <HeaderComponent />
      <WelcomeComponent isMobile={isMobile}/>
      <CommunityComponent isMobile={isMobile}/>
      <InfoComponent/>
      <RoadmapComponent/>
      <EcosystemComponent/>
      <FooterComponent/>
    </IndexContainer>
  )
}

export default Home
