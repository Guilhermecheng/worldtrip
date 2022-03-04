import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import Logo from '../../public/images/Logo.svg';


export default function Header() {
    let imgHeight = 46;
    
    const isNotMobile = useBreakpointValue({
        base: true,
        sm: false,
    })

    if(!!isNotMobile) {
        imgHeight = 20;
    }

    return (
        <Flex
            w="100%"
            h={[50, 100]}
            bg="white"
            alignItems="center"
            justifyContent="center"
        >
            <Link href="/">
                <Box as="span" cursor="pointer">
                    <Image src={ Logo } height={ imgHeight } alt="Worldtrip" />
                </Box>
            </Link>
        </Flex>
    )
}