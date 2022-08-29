import axios from 'axios';

const api = axios.create({
    baseURL: 'https://630b84c183986f74a7b27ed6.mockapi.io',
});

export { api };