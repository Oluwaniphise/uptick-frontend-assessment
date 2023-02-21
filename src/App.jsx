import { useState } from 'react'
import { Hero } from './components/Hero'
import { MovieList } from './components/movie/MovieList'
import { Navbar } from './components/Navbar'
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from './components/Footer';

function App() {

  return (
    <div className="bg-black  font-Roboto text-white">
      <Navbar />
      <Hero />
      <MovieList />
      <Footer />
    </div>
  )
}

export default App
