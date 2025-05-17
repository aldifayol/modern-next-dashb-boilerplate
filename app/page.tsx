import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Modern Next.js Boilerplate</CardTitle>
          <CardDescription>Built with Next.js, TypeScript, Tailwind CSS v4, and shadcn/ui</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This boilerplate includes authentication, dashboard layout, and Tanstack integration.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="https://github.com/your-username/modern-nextjs-boilerplate">GitHub</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/login">Get Started</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
