import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Users, LogOut } from "lucide-react"

export default function LobbyPage() {
  // This would normally come from a database or API
  const gameRooms = [
    { id: 1, name: "Casual Fun", players: 2, maxPlayers: 4, status: "Waiting" },
    { id: 2, name: "Competitive Play", players: 3, maxPlayers: 4, status: "In Progress" },
    { id: 3, name: "Beginners Welcome", players: 1, maxPlayers: 4, status: "Waiting" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-card shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">UNO Online</div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">Welcome, Player123!</div>
            <Link href="/">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <LogOut className="h-4 w-4" />
                <span>Log Out</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome to the Lobby!</h1>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="h-4 w-4 mr-2" />
            Create New Game
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameRooms.map((room) => (
            <Card key={room.id} className="overflow-hidden">
              <CardHeader className={`${room.status === "Waiting" ? "bg-green-100" : "bg-yellow-100"} py-3`}>
                <CardTitle>{room.name}</CardTitle>
                <CardDescription className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {room.players}/{room.maxPlayers} players
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      room.status === "Waiting" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                    }`}
                  >
                    {room.status}
                  </span>
                  <Button
                    variant={room.status === "Waiting" ? "default" : "secondary"}
                    disabled={room.status !== "Waiting"}
                    className={room.status === "Waiting" ? "bg-blue-600 hover:bg-blue-700" : ""}
                  >
                    {room.status === "Waiting" ? "Join Game" : "Spectate"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {gameRooms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No game rooms available at the moment.</p>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Create the First Game
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
