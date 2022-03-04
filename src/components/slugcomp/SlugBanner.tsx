import { Flex, Heading } from "@chakra-ui/react"

interface SlugBannerProps {
    continent_name: string;
    continent_main_image: string;
}

export function SlugBanner({ continent_name, continent_main_image }: SlugBannerProps) {
    return (
        <Flex
            h="31.25rem"
            w="100%"
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
    )
}