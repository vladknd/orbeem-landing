//#------------------GLOBAL-IMPORTS------------------#
import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//#------------------LOCAL-IMPORTS-------------------#
//-------------------ABI:
import ABI from '../ABI/Market'

//-------------------COMPONENTS:
import HeaderComponent from '../components/Header/HeaderComponent'
import WelcomeComponent from '../components/Welcome/WelcomeComponent'
import CommunityComponent from '../components/Community/CommunityComponent'
import InfoComponent from '../components/Info/InfoComponent'
import RoadmapComponent from '../components/Roadmap/RoadmapComponent'
import PartnersComponent from '../components/Partners/PartnersComponent'
import ModalBuyComponent from '../components/Modals/ModalBuyComponent'
import FooterComponent from '../components/Footer/FooterComponent'

//-------------------STYLED-COMPONENTS:
import { 
  MainContainer,
  Waves1
} from '../styles/pages/Index.styled'

//#------------------BODY-------------------#
const Home: NextPage = () => {
  
  const [modal, setModal] = useState(false)
  function handleModal() {
    setModal(!modal)
  }

  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="ORBEEM-Space" key="title" />
        <meta property="og:image" content="/bg-fb.png"></meta>
      </Head>
      {modal ? <ModalBuyComponent handleModal={handleModal}/> : null}
      <HeaderComponent/>  
      
      <MainContainer>
        <WelcomeComponent handleModal={handleModal}/>

        <Waves1>
          <Image
            src="/waves1.svg"
            width={1920}
            height={3500}
          />
        </Waves1>

        <CommunityComponent/>
        <InfoComponent/>
        <RoadmapComponent/>
        <PartnersComponent/>
        <FooterComponent/>
      </MainContainer>

      
    </div>
  )
}

export default Home
