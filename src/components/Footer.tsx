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
                borderWidth="1px"
            />

            <Heading
                fontWeight="semibold"
                fontSize={["md", "lg"]}
                color="gray.600"
                pt="8"
            >
                Worldtrip 2022 - Todos os direitos reservados
            </Heading>
        </Flex>
    )
}