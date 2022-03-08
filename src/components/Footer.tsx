import { Heading, Divider, Flex } from "@chakra-ui/react";


export function Footer() {
    return (
        <Flex
            direction="column"
            mx="8"
            pb="4"
            alignItems="center"
            justifyContent="center"
        >
            <Divider
                maxWidth="90px"
                borderColor="gray.600"
                borderBottomWidth="3px"
                opacity="0.8"
            />

            <Heading
                fontWeight="semibold"
                fontSize={["md", "lg"]}
                color="gray.600"
                pt="8"
                textAlign="center"
            >
                Worldtrip 2022 - Todos os direitos reservados
            </Heading>
        </Flex>
    )
}