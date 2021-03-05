import React from 'react'
import MovieCard from './components/MovieCard.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div>
      <h1 className='text-center text-light'>Movies</h1>
      <MovieCard />
    </div>
  )
}

export default App
