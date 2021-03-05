import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
const MovieCard = () => {
  const [featured, setFeatured] = useState([])
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&`
  const IMAGES_API = `https://image.tmdb.org/t/p/w1280`
  // const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&`
  const API_KEY = `api_key=3997d18b9ba6f2c5d2b91c4d53d096f0`
  useEffect(() => {
    fetch(FEATURED_API + API_KEY)
      .then((res) => res.json())
      .then((data) => setFeatured(data.results))

    console.log(featured.title)
  }, [])
  return (
    <Container>
      <Row>
        {featured.map((item, index) => (
          <Col key={index} xl='3' className='my-4'>
            <div
              className='parentDiv'
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <img
                className='posterimg'
                style={{ width: '100%' }}
                src={IMAGES_API + item.poster_path}
                alt='movieposter'
              />
              <div id='overview' className='overview'>
                <h4>Overview</h4>
                <p>{item.overview}</p>
              </div>
            </div>

            <div
              style={{ background: '#263859' }}
              className='d-flex  justify-content-between align-items-center text-light py-3 px-3'
            >
              <h6>{item.title}</h6>{' '}
              <span
                style={{
                  background: '#17223B',
                  padding: '3px 20px',
                  borderRadius: '7px',
                  fontWeight: '700',
                }}
              >
                {item.vote_average}
              </span>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default MovieCard
