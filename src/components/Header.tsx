import { Box, Flex, useBreakpointValue, Fade, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect } from "react";

import { FiChevronLeft } from "react-icons/fi";

import Logo from '../../public/images/Logo.svg';


export default function Header() {
    const { pathname } = useRouter();
    const { isOpen, onClose, onOpen } = useDisclosure();

    useEffect(() => {
        if(pathname != '/') onOpen();
    }, [pathname, onOpen])

    let imgHeight = 46;
    let arrowSize = 30;
    
    const isNotMobile = useBreakpointValue({
        base: true,
        sm: false,
    })

    if(!!isNotMobile) {
        imgHeight = 28;
        arrowSize = 24;
    }

    return (
        <Flex
            w="100%"
            h={[50, 100]}
            bg="white"
            alignItems="center"
            justifyContent="center"
        >
            { pathname != '/' && (
                <Box
                    position="absolute"
                    left={{ lg: "4rem" , base: "2rem" }}
                    cursor="pointer"
                >
                    <Fade in={ isOpen } onClick={ onClose }>
                        <Link href='/' passHref>
                            <FiChevronLeft 
                                size={ arrowSize }
                                color="#47585B"
                                strokeWidth={2}
                            />
                        </Link>
                    </Fade>
                </Box>
            )}
            
            <Link href="/" passHref>
                <Box as="span" cursor="pointer">
                    <Image src={ Logo } height={ imgHeight } alt="Worldtrip" />
                </Box>
            </Link>
        </Flex>
    )
}