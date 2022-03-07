import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";

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
            mt={{ md: "20", base: "10" }}
        >
            <Flex w="100%">
                <Heading 
                    as="h1" 
                    color="gray.600" 
                    fontSize={{ md: "4xl", base: "2xl" }}
                    fontWeight="semibold"
                    mb={{ md: "12", base: "6" }}
                    px={{ lg: "4", base: "8" }}
                >
                    Cidades +100
                </Heading>
            </Flex>

            <Grid 
                templateColumns={ data.cities? { lg: 'repeat(4, 1fr)', base: '1fr' }: '1fr' } 
                gap={10}
                px={{ lg: '4', base: "calc(40px + 5vw)" }}
                w="100%"
                justifyContent="center"
                alignItems="center"
            >
                {
                    data.cities ? (
                        data.cities.map(city => {
                            return (
                                <Box
                                    border="1px solid #FFBA08"
                                    borderRadius={6}
                                >
                                    <Box
                                        w="100%"
                                        h="44"
                                        backgroundImage={`url(${ city.city_banner_image })`}
                                        backgroundPosition="center"
                                        backgroundSize="cover"
                                        backgroundRepeat="no-repeat"
                                        borderTopRadius={6}
                                    ></Box>

                                    <Flex
                                        justifyContent="space-between"
                                        p="6"
                                    >
                                        <Box color="gray.600">
                                            <Heading
                                                as="h1"
                                                fontSize="xl"
                                                fontWeight="bold"
                                                mb="3"
                                            >
                                                { city.city_name }
                                            </Heading>

                                            <Text
                                                fontSize="md"
                                            >
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
                                            borderRadius={30}
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
            </Grid>
        </Box>
    )
}