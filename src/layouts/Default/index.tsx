import { Flex, Heading, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Spinner, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";

import { Header } from "./Header";

export default function Layout({children}:any) {    
    return (
        <Flex justify="center" align="center" w="100%" h="100vh">
            <Flex direction="column" w="700px">
                <Header/>
                {children}
            </Flex>
        </Flex>
    )
}