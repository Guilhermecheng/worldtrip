import { Flex, Box, useBreakpointValue, Text } from "@chakra-ui/react";
import Image from "next/image";

import vidaNoturna from '../../../public/images/vidanoturna.svg';
import praia from '../../../public/images/praia.svg';
import moderno from '../../../public/images/moderno.svg';
import classico from '../../../public/images/classico.svg';
import emais from '../../../public/images/emais.svg';

export function TravelTypes() {
    const isMobile = useBreakpointValue({
        base: true,
        md: false,
    })

    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            maxWidth="72.5em"
            w="100%"
            my="20"
            px="4"
        >
                <Flex direction="column" alignItems="center">
                    <Image src={ vidaNoturna } />
                    <Text>Vida Noturna</Text>
                </Flex>
                <Flex direction="column" alignItems="center">
                    <Image src={ praia } />
                    <Text>Praia</Text>
                </Flex>
                <Flex direction="column" alignItems="center">
                    <Image src={ moderno } />
                    <Text>Moderno</Text>
                </Flex>            
                <Flex direction="column" alignItems="center">
                    <Image src={ classico } />
                    <Text>Clássico</Text>
                </Flex>
                <Flex direction="column" alignItems="center">
                    <Image src={ emais } />
                    <Text>E mais...</Text>
                </Flex>
      </Flex>
    )
}