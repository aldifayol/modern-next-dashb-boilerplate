import type React from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"

interface DashboardHeaderProps {
  children?: React.ReactNode
}

export function DashboardHeader({ children }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <SidebarTrigger />
      <div className="flex flex-1 items-center justify-between">
        <div></div>
        {children}
      </div>
    </header>
  )
}
