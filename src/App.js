import React, { useState, useEffect } from 'react'
import MovieCard from './components/MovieCard.jsx'
import NavbarComponent from './components/NavbarComponent.jsx'
import PaginationComp from './components/PaginationComp.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)
  const [prevDisable, setPrevDisable] = useState(false)
  const [featured, setFeatured] = useState([])
  useEffect(() => {
    if (page === 1) {
      setPrevDisable(true)
    } else {
      setPrevDisable(false)
    }

  }, [page])



  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3997d18b9ba6f2c5d2b91c4d53d096f0&page=${page}`
  const IMAGES_API = `https://image.tmdb.org/t/p/w1280`
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=3997d18b9ba6f2c5d2b91c4d53d096f0&query=`

  useEffect(() => {
    const fetchData = () => {
      fetch(FEATURED_API)
        .then((res) => res.json())
        .then((data) => setFeatured(data.results))
    }
    fetchData()
  }, [featured])

  const submitHandler = (e) => {
    e.preventDefault()
    fetch(SEARCH_API + searchTerm)
      .then(res => res.json())
      .then(data => {
        setFeatured(data.results)
      })
    setSearchTerm('')
  }
  return (
    <div className='App'>
      <NavbarComponent submitHandler={submitHandler} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h1 className='text-center text-light mt-5'>Movies</h1>
      <MovieCard IMAGES_API={IMAGES_API} featured={featured} setFeatured={setFeatured} submitHandler={submitHandler} />
      <PaginationComp prevDisable={prevDisable} setPage={setPage} page={page} />
    </div>
  )
}

export default App
