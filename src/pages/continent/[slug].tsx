import { GetStaticProps } from "next";
import { Box, Flex } from "@chakra-ui/react";
import { ParsedUrlQuery } from 'querystring'

import { getPrismicClient } from "../../services/prismic";

import Header from "../../components/Header";
import { SlugBanner } from "../../components/slugcomp/SlugBanner";
import { ContinentInfo } from "../../components/slugcomp/ContinentInfo";
import { SlugCities } from "../../components/slugcomp/SlugCities";
import { Footer } from "../../components/Footer";

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
        }[] | null;
    }
}

export default function Continent({
    continent_name,
    continent_main_image,
    data,
}: ContinentProps) {

    console.log(data)
    let city_count = data.cities?.length;

    return (
        <Flex
            direction="column"
            alignItems="center"
        >
            <Header />
            <SlugBanner 
                continent_name={ continent_name }
                continent_main_image={ continent_main_image }
            />

            <Box
                maxWidth={1160}
                my={{ base: '10', lg: "20" }}
            >
                <ContinentInfo data={ data } cityCount={ city_count } />
                <SlugCities data={ data } />
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

        // if API is incomplete, and has no cities, this will prevent it from breaking
        let cities: any[] | null = [];
        if(response.data.cities[0].city_name) {
            cities = response.data.cities.map((city: any) => {
                if(city.city_name) {}
                return {
                    city_banner_image: city.city_banner_image.url,
                    country_flag: city.country_flag.url,
                    city_name: city.city_name,
                    city_country: city.city_country,
                }
            })
        } else {
            cities = null;
        }
    
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
        console.log(error)
        throw error
    }
}