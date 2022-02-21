import { Flex, Divider } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Header from '../components/Header';

import Image from 'next/image';

import { MainBanner } from '../components/homecomp/MainBanner';
import { TravelTypes } from '../components/homecomp/TravelTypes';
import { ContinentsSlides } from '../components/homecomp/ContinentsSlides';


const Home: NextPage = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
    >
      <Header />

      <MainBanner />

        <TravelTypes />
        <Divider maxWidth="90px" bg="gray.900" />

        <ContinentsSlides />

      
    </Flex>

    
  )
}

export default Home
