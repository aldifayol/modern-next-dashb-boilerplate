"use client"

import type React from "react"

import { useAuth } from "@/components/auth-provider"
import { DashboardHeader } from "@/components/dashboard-header"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarInset,
} from "@/components/ui/sidebar"
import { LayoutDashboard, Users, Settings, BarChart3, FileText, ShoppingCart, Package, Bell } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { UserNav } from "@/components/user-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth()
  const router = useRouter()

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Skeleton className="h-32 w-32 rounded-full" />
      </div>
    )
  }

  if (!user) {
    router.push("/auth/login")
    return null
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <DashboardHeader>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <UserNav />
          </div>
        </DashboardHeader>
        <div className="flex flex-1">
          <Sidebar variant="inset" collapsible="icon">
            <SidebarHeader>
              <div className="flex h-14 items-center px-4">
                <Button variant="ghost" className="flex items-center gap-2 text-lg font-semibold">
                  <LayoutDashboard className="h-5 w-5" />
                  <span>Dashboard</span>
                </Button>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Overview</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive={true} tooltip="Dashboard">
                        <a href="/dashboard">
                          <LayoutDashboard className="h-5 w-5" />
                          <span>Dashboard</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Analytics">
                        <a href="/dashboard/analytics">
                          <BarChart3 className="h-5 w-5" />
                          <span>Analytics</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Reports">
                        <a href="/dashboard/reports">
                          <FileText className="h-5 w-5" />
                          <span>Reports</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Management</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Products">
                        <a href="/dashboard/products">
                          <Package className="h-5 w-5" />
                          <span>Products</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Orders">
                        <a href="/dashboard/orders">
                          <ShoppingCart className="h-5 w-5" />
                          <span>Orders</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Customers">
                        <a href="/dashboard/customers">
                          <Users className="h-5 w-5" />
                          <span>Customers</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>System</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Notifications">
                        <a href="/dashboard/notifications">
                          <Bell className="h-5 w-5" />
                          <span>Notifications</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip="Settings">
                        <a href="/dashboard/settings">
                          <Settings className="h-5 w-5" />
                          <span>Settings</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <div className="p-4">
                <p className="text-xs text-muted-foreground">v1.0.0 - Modern Next.js Boilerplate</p>
              </div>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <main className="flex-1 p-6">{children}</main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
