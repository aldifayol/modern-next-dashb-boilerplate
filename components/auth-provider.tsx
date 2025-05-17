"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { toast } from "sonner"

type User = {
  id: string
  name: string
  email: string
  image?: string
  role: "user" | "admin"
}

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user data for demonstration
const MOCK_USER: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  image: "/placeholder.svg?height=40&width=40",
  role: "admin",
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  // Check if user is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  // Protect dashboard routes
  useEffect(() => {
    if (!loading) {
      if (pathname?.startsWith("/dashboard") && !user) {
        router.push("/auth/login")
      }
    }
  }, [loading, user, pathname, router])

  const login = async (email: string, password: string) => {
    try {
      setLoading(true)
      // In a real app, you would make an API call here
      // For demo purposes, we'll just set the mock user
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

      if (email === "john@example.com" && password === "password") {
        setUser(MOCK_USER)
        localStorage.setItem("user", JSON.stringify(MOCK_USER))
        router.push("/dashboard")
        toast.success("Logged in successfully")
      } else {
        toast.error("Invalid credentials")
      }
    } catch (error) {
      toast.error("Failed to login")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const register = async (name: string, email: string, password: string) => {
    try {
      setLoading(true)
      // In a real app, you would make an API call here
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

      const newUser = { ...MOCK_USER, name, email }
      setUser(newUser)
      localStorage.setItem("user", JSON.stringify(newUser))
      router.push("/dashboard")
      toast.success("Account created successfully")
    } catch (error) {
      toast.error("Failed to create account")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
    toast.success("Logged out successfully")
  }

  return <AuthContext.Provider value={{ user, loading, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
