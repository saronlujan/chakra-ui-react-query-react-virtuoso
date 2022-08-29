import { useState } from "react";
import { Flex, Icon, Spinner } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";

import { FaGlobeAmericas } from "react-icons/fa";
import { useStatusUser } from "../services/users";

type StatusProps = {
    id: number;
    status: number;
}

export function Status({id, status}: StatusProps){
    const [loading, setLoading] = useState(false);
    const {mutateAsync: update} = useStatusUser();

    const queryClient = useQueryClient()

    async function handleChange(){
        setLoading(true);

        await update(id, {
            onError: (error) => {
                console.log(error);
            },
            onSuccess: ({data}) => {
                console.log(data);
            }
        });

        setLoading(false);
    }

    return(
        <Flex color={status ? 'teal.500' : 'red.500'} onClick={handleChange}>
            <Icon as={loading ? Spinner : FaGlobeAmericas} fontSize="20px"/>
        </Flex>
    )
}