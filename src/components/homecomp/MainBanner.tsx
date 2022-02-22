import { Flex, Grid, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

import AirplaneSvg from '../../../public/images/Airplane.svg';

interface MainBannerProps {
    isMobile?: boolean;
}

export function MainBanner({ isMobile }: MainBannerProps) {

    return (
        <Flex
            w="100vw"
            h={!isMobile ? "335px" : "200px"}
            backgroundImage="url('/images/Background.svg')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            alignItems="center"
            justifyContent="center"
            px="4" // CONTAINER INSIDE PADDING
            // mb="10"
        >
            <Grid
                templateColumns={!isMobile ? "repeat(2, 1fr)" : "1fr"}
                maxWidth="72.5em" // MAX CONTAINER WIDTH
                color="#F5F8FA"
            >
            <Flex
                flexDirection="column"
                justifyContent="center"
            >
                <Heading 
                    as="h1"
                    fontSize={["2xl", "3xl", "4xl"]}
                    fontWeight="semibold"
                    letterSpacing="1px"
                >
                    5 Continentes, infinitas possibilidades.
                </Heading>
                <Text
                    mt="8"
                    fontSize={["md", "lg" ,"xl"]}
                    fontWeight="light"
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou
                </Text>
            </Flex>

            {!isMobile && (
                <Flex
                    justifyContent="flex-end"
                    mt="8em"
                >
                    <Image 
                        src={ AirplaneSvg }
                        height={270}
                        width={417}
                        alt="Airplane Image"
                    />
                </Flex>
            )}

            </Grid>
      </Flex>
    )
}