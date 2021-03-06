import { Flex, Divider, useBreakpointValue } from '@chakra-ui/react';
import type { GetStaticProps } from 'next'
import Header from '../components/Header';

import { getPrismicClient } from '../services/prismic';

import { MainBanner } from '../components/homecomp/MainBanner';
import { TravelTypes } from '../components/homecomp/TravelTypes';
import { ContinentsSlides } from '../components/homecomp/ContinentsSlides';
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
  
  return (
    <Flex
      direction="column"
      alignItems="center"
    >
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
    pageSize: 10,
  })

  // put response in alphabetical order by continent name
  const responseSorted = response.sort((a, b) => a.data.continent_name.localeCompare(b.data.continent_name));

  // console.log(response)
  const Allcontinents = responseSorted.map(continent => {
    return {
      uid: continent.uid,
      continent_name: continent.data.continent_name,
      continent_subtitle: continent.data.continent_subtitle,
      continent_banner_image: continent.data.continent_banner_image.url,
    }
  })

  return {
    props: {
      Allcontinents,
    }
  }
}