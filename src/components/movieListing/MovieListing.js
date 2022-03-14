import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './../movieCard/MovieCard'
import './movieListing.scss'

function MovieListing() {
  const movies = useSelector((state) => state.movies.movies)
  console.log(movies)
  
  let renderMovies = ''

  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className='movies-error'>
        <h3>{movies.Error}</h3>
      </div>
    )

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>movies</h2>
        <div className='movie-container'>{renderMovies}</div>
      </div>
    </div>
  )
}

export default MovieListing
