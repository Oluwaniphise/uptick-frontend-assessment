import { useState } from 'react'
import { Hero } from './components/Hero'
import { MovieList } from './components/MovieList'
import { Navbar } from './components/Navbar'
function App() {

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <MovieList />
    </div>
  )
}

export default App
