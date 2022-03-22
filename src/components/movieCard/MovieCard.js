import React from 'react'
import { Link } from 'react-router-dom'
import './movieCard.scss'

function MovieCard({ data }) {
  return (
    <div className='card-item' title={data.Title}>
      <Link to={`/movie/${data.imdbID}`}>
        <div className='card-inner'>
          <div className='card-top'>
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className='card-bottom'>
            <div className='card-info'>
              <div>{data.Title}</div>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard
