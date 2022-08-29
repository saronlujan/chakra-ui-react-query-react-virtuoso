import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { IoRocketSharp } from "react-icons/io5";

export function Header(){
    return(
        <Flex direction="column" py="10" px="5">
            <Heading as="h1" size="md" color="teal.500">
                <Icon as={IoRocketSharp} />Chakra UI with react-query and react-virtuoso.
            </Heading>
            <Text>Improve state management and rendering.</Text>
        </Flex>
    )
}