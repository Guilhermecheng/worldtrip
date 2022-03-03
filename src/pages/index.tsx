import { Flex, Divider, useBreakpointValue } from '@chakra-ui/react';
import type { GetStaticProps } from 'next'
import Header from '../components/Header';

import { MainBanner } from '../components/homecomp/MainBanner';
import { TravelTypes } from '../components/homecomp/TravelTypes';
import { ContinentsSlides } from '../components/homecomp/ContinentsSlides';

import { getPrismicClient } from '../services/prismic';
import { Footer } from '../components/Footer';


interface ContinentProps {
    uid: string;
    continent_name: string;
    continent_subtitle: string;
    continent_banner_image: string;
}

interface HomeProps {
  Allcontinents: ContinentProps[];
}

export default function Home({ Allcontinents }: HomeProps): JSX.Element  {

  const isMobile = useBreakpointValue({
      base: true,
      md: false,
  })

  console.log("reiniciei")

  
  console.log(Allcontinents)
  
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
        borderBottomWidth="3px"
        opacity="0.8"
      />

      <ContinentsSlides isMobile={ isMobile } Allcontinents={ Allcontinents } />

      <Footer />
    </Flex>

    
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.getAllByType("continent", {
    // predicates: [
    //   Prismic.predicate.at("my.continent.type", "continent"),      
    // ],    
    // fetchLinks: ["continent.continent_name", "continent.continent_main_image"],
    pageSize: 10,
  })

  console.log(response)
  const Allcontinents = response.map(continent => {

    return {
      uid: continent.uid,
      continent_name: continent.data.continent_name,
      continent_subtitle: continent.data.continent_subtitle,
      continent_banner_image: continent.data.continent_banner_image.url,
    }
  })
  console.log(Allcontinents)


  return {
    props: {
      Allcontinents,
    }
  }
}