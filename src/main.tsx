/**
 * Bootstrap applciation
 * 
 * Author Yamil Bracho
 * 2026-Nov-11
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import './index.css'
import AppRoutes from './routes/AppRoutes';
const queryClient = new QueryClient(); // Este es el que maneja la caché


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <AppRoutes />  
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
