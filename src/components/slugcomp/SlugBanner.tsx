import { Flex, Heading } from "@chakra-ui/react"

interface SlugBannerProps {
    continent_name: string;
    continent_main_image: string;
}

export function SlugBanner({ continent_name, continent_main_image }: SlugBannerProps) {
    return (
        <Flex
            h={{ base: "10em", lg: "31.2em" }}
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
                justifyContent={{ base: "center", lg: "flex-start" }}
                alignItems={{ base: "center", lg: "end" }}
            >
                <Heading
                    as="h1"
                    color="white"
                    fontSize={{ base: "3xl", lg: "5xl" }}
                    px={{ lg: "4", base: "8" }}

                >
                    { continent_name }
                </Heading>
            </Flex>
        </Flex>
    )
}