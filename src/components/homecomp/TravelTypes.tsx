import { Flex, Icon, useBreakpointValue, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

import vidanoturna from '../../../public/images/vidanoturna.svg';
import praia from '../../../public/images/praia.svg';
import moderno from '../../../public/images/moderno.svg';
import classico from '../../../public/images/classico.svg';
import emais from '../../../public/images/emais.svg';

import { GoPrimitiveDot } from 'react-icons/go';


interface TravelTypesProps {
    isMobile?: boolean;
}

const travelTypeImages = [
    {
        name: 'vidanoturna',
        text: 'Vida Noturna',
        image: vidanoturna,
    },
    {
        name: 'praia',
        text: 'Praia',
        image: praia,
    },
    {
        name: 'moderno',
        text: 'Moderno',
        image: moderno,
    },
    {
        name: 'classico',
        text: 'Clássico',
        image: classico,
    },
    {
        name: 'emais',
        text: 'E mais...',
        image: emais,
    },
]

export function TravelTypes({ isMobile }: TravelTypesProps) {

    return (
        <Flex
            alignItems="center"
            justifyContent={ isMobile ? "center" :  "space-between" }
            maxWidth="72.5em"
            w="100%"
            mt={ isMobile ? "10" : "24"}
            mb={ isMobile ? "10" : "20"}
            px="4"
            flexWrap={ isMobile ? "wrap" :  "nowrap" }
        >
            {
                travelTypeImages.map((type) => {
                    return (
                        <Flex 
                            direction={isMobile ?  "row" : "column"}
                            alignItems="center"
                            id={ type.name }
                            mx={ isMobile ? "6" : "0" }
                        >
                            { isMobile ? (
                                <Flex
                                    mr="2"
                                >
                                    <Icon as={ GoPrimitiveDot } color="#FFBA08"  />
                                </Flex>
                            ) : (
                                <Box
                                    mb="6"
                                >
                                    <Image src={ type.image } alt={ type.text } />
                                </Box>
                            ) }

                            <Text 
                                fontWeight="semibold"
                                color="gray.600"
                                fontSize="lg"
                                letterSpacing="1px"
                            >
                                { type.text }
                            </Text>
                        </Flex>
                    )
                })
            }
      </Flex>
    )
}