import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SidebarProvider } from './contexts/SidebarContext.tsx'
import { PaginationProvider } from './contexts/PaginationContext.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <PaginationProvider>
          <App />
        </PaginationProvider>
      </SidebarProvider>
    </BrowserRouter>
  </StrictMode>,
)
