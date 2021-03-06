import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
const MovieCard = ({ featured, IMAGES_API }) => {
  return (
    <Container>
      <Row>
        {featured.map((item, index) => (
          <Col key={index} xl='3' lg='3' md='4' sm='6' className='my-4'>
            <div className='parentDiv'>
              <img
                className='posterimg'
                src={IMAGES_API + item.poster_path}
                alt='movieposter'
              />
              <div id='overview' className='overview'>
                <h4>Overview</h4>
                <p>{item.overview}</p>
              </div>
            </div>

            <div className='movie-footer py-3 px-3'>
              <h6>{item.title}</h6>
              <span className='rating'>{item.vote_average}</span>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default MovieCard
