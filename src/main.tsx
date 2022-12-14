import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App'

import {QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from './services/queryClient';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider resetCSS>
                <App />
            </ChakraProvider>
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>
)
