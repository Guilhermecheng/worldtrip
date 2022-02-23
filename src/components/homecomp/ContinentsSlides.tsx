import { Flex, Heading, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { Slides } from '../Slides';

interface ContinentsSlidesProps {
    isMobile?: boolean;
}

export function ContinentsSlides({ isMobile }: ContinentsSlidesProps) {

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

            <Link href={`/continent/europe`}>
                <a>Europa</a>  
            </Link>

            <Box
                maxWidth={1160}

            >
                <Slides />            
            </Box> 
        </Flex>
    )
}