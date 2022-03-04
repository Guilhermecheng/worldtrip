import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface SlugCitiesProps {
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

export function SlugCities({ data }: SlugCitiesProps) {
    return (
        <Box
            my="20"
        >
            <Flex w="100%">
                <Heading as="h1" color="gray.600" fontSize="4xl" fontWeight="semibold">Cidades +100</Heading>
            </Flex>

            <Flex>
                {
                    data.cities ? (
                        data.cities.map(city => {
                            return (
                                <Box
                                    border="1px solid #FFBA08"
                                >
                                    <Box
                                        w="300px"
                                        h="300px"
                                        backgroundImage={`url(${ city.city_banner_image })`}
                                        backgroundPosition="center"
                                        backgroundSize="cover"
                                        backgroundRepeat="no-repeat"
                                    ></Box>

                                    <Flex

                                    >
                                        <Box color="gray.600">
                                            <Heading>
                                                { city.city_name }
                                            </Heading>

                                            <Text>
                                                { city.city_country }
                                            </Text>

                                        </Box>
                                        
                                        <Box 
                                            as="span"
                                            backgroundImage={`url(${ city.country_flag })`}
                                            w="30px"
                                            h="30px"
                                            backgroundPosition="center"
                                            backgroundSize="cover"
                                            backgroundRepeat="no-repeat"
                                        ></Box>

                                    </Flex>
                                </Box>
                            )
                        })
                    ) : (
                        <Flex
                        w="100%"
                            pt="20"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Heading 
                                as="h1" 
                                color="gray.600" 
                                fontSize="4xl" 
                                fontWeight="semibold"
                            >
                                No city found
                            </Heading>
                        </Flex>
                    )
                }
            </Flex>
        </Box>
    )
}