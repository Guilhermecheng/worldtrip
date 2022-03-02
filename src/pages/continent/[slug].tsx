import { GetStaticProps } from "next";
import { Box, Flex, Heading, Text, Grid } from "@chakra-ui/react";

import { ParsedUrlQuery } from 'querystring'
import { Footer } from "../../components/Footer";
import { getPrismicClient } from "../../services/prismic";
import Image from "next/image";
import Header from "../../components/Header";

interface IParams extends ParsedUrlQuery {
    slug: string
}

interface ContinentProps {
    continent_name: string;
    continent_subtitle: string;
    continent_main_image: string;
    continent_banner_image: string;
    data: {
        continent_information: {
            type: string;
            text: string;
        }[];
        number_of_countries: number;
        number_of_languages: number;
        cities: {
            city_banner_image: string;
            country_flag: string;
            city_name: string;
            city_country: string;
        }[]
    }
}

export default function Continent({
    continent_name,
    continent_main_image,
    data,
}: ContinentProps) {

    console.log(continent_main_image)

    return (
        <Flex
            direction="column"
            alignItems="center"
        >
            <Header />

            <Flex
                h="31.25rem"
                w="100vw"
                bg={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(${ continent_main_image })`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                alignItems="center"
                justifyContent="center"
            >
                <Flex
                    w="100%"
                    h="80%"
                    maxWidth={1160}
                    // justifyContent="flex-start"
                    alignItems="end"
                >
                    <Heading
                        as="h1"
                        color="white"
                        fontSize="5xl"
                    >
                        { continent_name }
                    </Heading>
                </Flex>
            </Flex>

            <Box
                maxWidth={1160}
                my="20"

            >
                <Grid
                    templateColumns={{ md: "6fr 5fr", base:  "1fr"}}
                    gridGap="16"
                >
                    <Flex>
                        <Text>
                            { data.continent_information[0].text }
                        </Text>
                    </Flex>

                    <Grid
                        templateColumns="repeat(3, 1fr)"
                    >
                        <Box>
                            <Text>{ data.number_of_countries }</Text>
                            <Text>países</Text>
                        </Box>

                        <Box>
                            <Text>{ data.number_of_languages }</Text>
                            <Text>línguas</Text>
                        </Box>

                        <Box>
                            <Text>{ 12 }</Text>
                            <Text>cidades 100+</Text>
                        </Box>
                    </Grid>
                </Grid>


            </Box>

            <Footer />
        </Flex>
    )
}

export async function getStaticPaths() {
    return {
      paths: [],
      // Enable statically generating additional pages
      // For example: `/posts/3`
      fallback: true,
    }
  }

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams 
    const Prismic = getPrismicClient();

    try {
        const response = await Prismic.getByUID('continent', String(slug));
    
        const cities = response.data.cities.map((city: any) => {
            return {
                city_banner_image: city.city_banner_image.url,
                country_flag: city.country_flag.url,
                city_name: city.city_name,
                city_country: city.city_country,
            }
        })
    
        return {
            props: {
                continent_name: response.data.continent_name,
                continent_subtitle: response.data.continent_subtitle,
                continent_main_image: response.data.continent_main_image.url,
                continent_banner_image: response.data.continent_banner_image.url,
                data: {
                    continent_information: response.data.continent_information,
                    number_of_countries: response.data.number_of_countries,
                    number_of_languages: response.data.number_of_languages,
                    cities,
                }
            }
        }
        
    } catch(error) {
        throw error
    }
}