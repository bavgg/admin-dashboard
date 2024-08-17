import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SidebarProvider } from './contexts/SidebarContext.tsx'
import { PaginationProvider } from './contexts/PaginationContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
      <PaginationProvider>
        <App />
      </PaginationProvider>
    </SidebarProvider>
  </StrictMode>,
)
