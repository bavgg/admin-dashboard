import { createContext, ReactNode, useRef } from "react";

type SidebarContextType = {
    sidebarRef: React.MutableRefObject<HTMLDivElement | null>
}
export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({children}: { children: ReactNode}) {
    const sidebarRef = useRef<HTMLDivElement | null>(null);
  return (
    <SidebarContext.Provider value={{ sidebarRef }}>
      {children}
    </SidebarContext.Provider>
  );
}
