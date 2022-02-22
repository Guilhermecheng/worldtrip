import { Flex, Divider, useBreakpointValue } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Header from '../components/Header';

import Image from 'next/image';

import { MainBanner } from '../components/homecomp/MainBanner';
import { TravelTypes } from '../components/homecomp/TravelTypes';
import { ContinentsSlides } from '../components/homecomp/ContinentsSlides';


const Home: NextPage = () => {

  const isMobile = useBreakpointValue({
      base: true,
      md: false,
  })
  
  return (
    <Flex
      direction="column"
      alignItems="center"
    >
      {/* Header mobile props are different (breakpointvalue is sm) */}
      <Header /> 

      <MainBanner isMobile={ isMobile }  />

      <TravelTypes isMobile={ isMobile }  />
      
      <Divider
        maxWidth="90px"
        borderColor="gray.600"
        borderWidth="1px"
      />

      <ContinentsSlides isMobile={ isMobile } />

      
    </Flex>

    
  )
}

export default Home
