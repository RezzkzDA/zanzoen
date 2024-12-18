import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Server, Shield, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-green-400">CubeCraft</span>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-green-400 transition-colors">About</a></li>
            <li><a href="#join" className="hover:text-green-400 transition-colors">Join</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-green-400">Zanzoken</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              A simple, modern Minecraft server for all players. 
              Build, explore, and connect in our carefully crafted world.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-colors">
              Start Playing Now
            </Button>
          </div>
        </section>

        <section id="about" className="py-16 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Our Server</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Community', icon: Users, description: 'Join our friendly and diverse player base.' },
                { title: 'Stability', icon: Server, description: '99.9% uptime with lag-free gameplay.' },
                { title: 'Security', icon: Shield, description: 'Grief protection and fair play ensured.' },
              ].map((feature, index) => (
                <Card key={index} className="bg-gray-700/50 border-gray-600">
                  <CardHeader>
                    <feature.icon className="h-8 w-8 mb-2 text-green-400" />
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="join" className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Connect to our server using the address below:
            </p>
            <div className="bg-gray-700/50 p-4 rounded-lg inline-block mb-8">
              <p className="text-2xl font-mono text-green-400">play.zanzoken.my.id</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-colors">
                Join Server
              </Button>
              <Button variant="outline" className="text-green-400 border-green-400 hover:bg-green-400/10">
                How to Connect <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 CubeCraft. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-green-400 hover:text-green-300 transition-colors mx-2">Rules</a>
            <a href="#" className="text-green-400 hover:text-green-300 transition-colors mx-2">Discord</a>
            <a href="#" className="text-green-400 hover:text-green-300 transition-colors mx-2">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
