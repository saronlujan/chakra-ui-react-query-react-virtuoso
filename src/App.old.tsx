import { Flex } from "@chakra-ui/react";

export default function App() {

    return (
        <Flex direction="column" w="100%" minH="100vh"  bg="gray.500">
            <Flex w="100%" h="70px" bg="gray.600">
                ssssss
            </Flex>
            <Flex w="100%" h="calc(100vh - 170px)" bg="gray.900" p="5" overflow="scroll">
                <Flex w="100%" h="2000px" bg="gray.100"></Flex>
            </Flex>
            <Flex w="100%" h="100px" bg="gray.400">
                xxxxx
            </Flex>
        </Flex>
    )
}