import { useState } from "react";
import { Flex, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Spinner, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";

import { IoIosArrowDown} from "react-icons/io";
import Layout from "./layouts/Default";

import { useGetUsers } from "./services/users";
import { useQueryClient } from "@tanstack/react-query";
import { FaGlobeAmericas } from "react-icons/fa";

type UserType = {
    id: number;
    name: string;
    last_name: string;
    email: string;
    status: number;
}

export default function App() {
    const {data: users, isLoading, isFetching} = useGetUsers();

    const queryClient = useQueryClient();

    async function handleChange(id:number){

        const prevState:any = queryClient.getQueryData(['users']);

        console.log('Prev State: ', prevState);

        const newUsers = prevState.data.map((user:any) => {
            if (user.id === id) {
                return {...user, status: true};
            }
            return user;
        });

        console.log('New State: ', newUsers);

        queryClient.setQueryData(['users'], (old:any) => {
            old.data.map((user: any) => {
                console.log(user);
            })
            return [...old.data, newUsers];
        });
    }

    
    return (
        <Layout>
            {isLoading ? (
                <Flex justify="center" align="center" color="teal.500">
                    <Spinner size="sm" mr="10px"/> <Text>loading...</Text>
                </Flex>
            ) : (
                <TableContainer>
                    <Table variant="simple">
                        {isFetching && (
                            <TableCaption>
                                <Flex>
                                    <Spinner size="sm" mr="10px"/> <Text>fetching data...</Text>
                                </Flex>
                            </TableCaption>
                        )}
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th></Th>
                                <Th>User</Th>
                                <Th>E-mail</Th>
                                <Th isNumeric></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {users?.data?.map((user:UserType) => (
                                <Tr key={user.id}>
                                    <Td>{user.id}</Td>
                                    <Td>
                                        <Flex color={user.status ? 'teal.500' : 'red.500'} onClick={() => handleChange(user.id)}>
                                            <Icon as={FaGlobeAmericas} fontSize="20px"/>
                                        </Flex>  
                                    </Td>
                                    <Td>{user.name} {user.last_name}</Td>
                                    <Td>{user.email}</Td>
                                    <Td isNumeric>
                                        <Menu>
                                            <MenuButton as={IconButton} aria-label='Opções' icon={<IoIosArrowDown />} size="md" />
                                            <MenuList>
                                                <MenuItem>
                                                    Details
                                                </MenuItem>
                                                <MenuItem color="red">
                                                    Delete
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            )}
        </Layout>
    )
}