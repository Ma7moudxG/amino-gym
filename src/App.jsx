import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'

function App() {

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 to-black text-white text-sm sm:text-base">      
      <Hero />
      <Generator />
      <Workout />
    </main>
  )
}

export default App
