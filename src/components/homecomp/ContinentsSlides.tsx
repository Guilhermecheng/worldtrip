import { Flex, Heading, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { Slides } from '../Slides';

interface ContinentProps {
    slugs: string[];
    continent_name: string;
    continent_subtitle: string;
    continent_banner_image: string;
}

interface ContinentsSlidesProps {
    isMobile?: boolean;
    Allcontinents: ContinentProps[]
}

export function ContinentsSlides({ isMobile, Allcontinents }: ContinentsSlidesProps) {

    return (
        <Flex
            direction="column"
            my={ !!isMobile ? "8" : "12"}
            alignItems="center"
            fontSize="2xl"
            color="gray.600"
        >
            <Heading 
                as="h1" 
                fontWeight="semibold"
                fontSize={["2xl", "4xl"]}
            >
                Vamos nessa?
            </Heading>

            <Heading 
                as="h1" 
                fontWeight="semibold"
                fontSize={["2xl", "4xl"]}
            >
                Então escolha seu continente
            </Heading>

            {/* <Link href={`/continent/europe`}>
                <a>Europa</a>  
            </Link> */}

            <Box
                w="100vw"
                maxWidth={1160}
                px="2"
                pt="8"

            >
                <Slides Allcontinents={ Allcontinents }  />
            </Box> 
        </Flex>
    )
}