import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <div className="text-2xl font-bold">UNO Online</div>
          <nav className="space-x-4">
            <Link href="/login">
              <Button variant="ghost">Log In</Button>
            </Link>
            <Link href="/register">
              <Button variant="default" className="bg-red-600 hover:bg-red-700">
                Register
              </Button>
            </Link>
          </nav>
        </header>

        <main className="py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
              Play UNO Online!
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              Connect with friends, challenge players worldwide, and experience the classic card game like never before.
              Fast-paced, colorful, and endlessly entertaining!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/register">
                <Button className="w-full sm:w-auto text-lg py-6 px-8 bg-red-600 hover:bg-red-700">Get Started</Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" className="w-full sm:w-auto text-lg py-6 px-8 border-2">
                  I Already Have an Account
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-red-500 text-white text-center transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Play Anywhere</h3>
              <p>Available on desktop and mobile devices</p>
            </div>
            <div className="p-6 rounded-lg bg-yellow-500 text-white text-center transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Real-Time Matches</h3>
              <p>Instant gameplay with friends or random opponents</p>
            </div>
            <div className="p-6 rounded-lg bg-green-500 text-white text-center transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Classic Rules</h3>
              <p>Enjoy the authentic UNO experience online</p>
            </div>
            <div className="p-6 rounded-lg bg-blue-500 text-white text-center transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Global Leaderboards</h3>
              <p>Compete to be the best UNO player worldwide</p>
            </div>
          </div>
        </main>

        <footer className="mt-24 py-8 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} UNO Online. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
