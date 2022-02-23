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
    console.log(`essa porra é ${isMobile}`)

    return (
        <Flex
            alignItems="center"
            justifyContent={{base: "center", md: "space-between"}}
            maxWidth="72.5em"
            w="100%"
            mt={{base: "10", md: "24"}}
            mb={{base: "10", md: "20"}}
            px="4"
            flexWrap="wrap"
        >
            {
                travelTypeImages.map((type) => {
                    return (
                        <Flex 
                            direction={{base: "row", md: "column"}}
                            alignItems="center"
                            id={ type.name }
                            mx={{base: "6", md: "0"}}
                        >
                            { isMobile ? (
                                <Flex
                                    mr="2"
                                    mb="0"
                                >
                                    <Icon as={ GoPrimitiveDot } color="#FFBA08"  />
                                </Flex>
                            ) : (
                                <Flex
                                    mb={{md: "6", base: "0"}} // estilizaçao deste comp n é substituida pelo "if" do isMobile.. necessário este formato para responsividade funcionar corretamente
                                    mr={{base: "2", md: "0"}}
                                >
                                    <Image src={ type.image } alt={ type.text } />
                                </Flex>
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