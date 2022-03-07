import { Grid, Flex, Text, Heading } from "@chakra-ui/react";

interface ContinentInfoProps {
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
    };
    cityCount: number | undefined;
}

export function ContinentInfo({ data, cityCount }: ContinentInfoProps) {
    return (
        <Grid
            templateColumns={{ lg: "6fr 5fr", base:  "1fr"}}
            gridGap={{ lg: "16", base: "10" }}
            px={{ lg: "4", base: "10" }}
        >
            <Flex>
                <Text
                    fontSize={{ lg: "2xl", base:  "lg"}}
                    color="gray.600"
                    align="justify"
                >
                    { data.continent_information[0].text }
                </Text>
            </Flex>

            <Grid
                templateColumns="repeat(3, 1fr)"
                w='100%'
            >
                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Heading
                        as="h1"
                        color="yellow.400"
                        fontSize={{ lg: "5xl", md: "3xl", base:  "2xl"}}
                        fontWeight="semibold"
                    >
                        { data.number_of_countries }
                    </Heading>
                    <Text
                        fontWeight="semibold"
                        color="gray.600"
                        fontSize={{ lg: "2xl", base:  "md"}}
                        textAlign="center"
                    >
                        países
                    </Text>
                </Flex>

                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Heading
                        as="h1"
                        color="yellow.400"
                        fontSize={{ lg: "5xl", md: "3xl", base:  "2xl"}}
                        fontWeight="semibold"
                    >
                        { data.number_of_languages }
                    </Heading>
                    <Text
                        fontWeight="semibold"
                        color="gray.600"
                        fontSize={{ lg: "2xl", base:  "md"}}
                        textAlign="center"
                    >
                        línguas
                    </Text>
                </Flex>

                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Heading
                        as="h1"
                        color="yellow.400"
                        fontSize={{ lg: "5xl", md: "3xl", base:  "2xl"}}
                        fontWeight="semibold"
                    >
                        { cityCount ? cityCount : 0 }
                    </Heading>
                    <Text
                        fontWeight="semibold"
                        color="gray.600"
                        fontSize={{ lg: "2xl", base:  "md"}}
                        textAlign="center"
                    >
                        cidades +100
                    </Text>
                </Flex>
            </Grid>
        </Grid>
    )
}