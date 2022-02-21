import { Flex } from '@chakra-ui/react';
import Link from 'next/link';

export function ContinentsSlides() {
    return (
        <Flex>
            <h1>Vamos nessa? Então escolha seu continente</h1>

            <Link href={`/continent/europe`}>
                <a>Europa</a>  
            </Link>
        </Flex>
    )
}