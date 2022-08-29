import { useQuery, useMutation } from "@tanstack/react-query";
import { api } from "../api";

export async function getUsers(){
    return await api.get('users');
}

export function useGetUsers() {
    return useQuery(['users'], () => getUsers(), {
        staleTime:60 * 1000 * 60 * 24, 
        cacheTime:10
    });
}

export async function statusUser(id: number){
    return await api.put(`users/status/${id}`);
}

export function useStatusUser() {
    return useMutation((id: number) => statusUser(id));
}