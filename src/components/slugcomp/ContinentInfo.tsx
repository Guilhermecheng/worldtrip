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
            templateColumns={{ md: "6fr 5fr", base:  "1fr"}}
            gridGap="16"
        >
            <Flex>
                <Text
                    fontSize="2xl"
                    color="gray.600"
                    align="justify"
                >
                    { data.continent_information[0].text }
                </Text>
            </Flex>

            <Grid
                templateColumns="repeat(3, 1fr)"
            >
                <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Heading
                        as="h1"
                        color="yellow.400"
                        fontSize="5xl"
                        fontWeight="semibold"
                    >
                        { data.number_of_countries }
                    </Heading>
                    <Text
                        fontWeight="semibold"
                        color="gray.600"
                        fontSize="2xl"
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
                        fontSize="5xl"
                        fontWeight="semibold"
                    >
                        { data.number_of_languages }
                    </Heading>
                    <Text
                        fontWeight="semibold"
                        color="gray.600"
                        fontSize="2xl"
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
                        fontSize="5xl"
                        fontWeight="semibold"
                    >
                        { cityCount ? cityCount : 0 }
                    </Heading>
                    <Text
                        fontWeight="semibold"
                        color="gray.600"
                        fontSize="2xl"
                    >
                        cidades +100
                    </Text>
                </Flex>
            </Grid>
        </Grid>
    )
}