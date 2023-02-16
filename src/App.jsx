import { useState } from 'react'
import { MovieList } from './components/MovieList'
import { Navbar } from './components/Navbar'
function App() {

  return (
    <div className="bg-black text-white">
      <Navbar />
      <MovieList />
    </div>
  )
}

export default App
