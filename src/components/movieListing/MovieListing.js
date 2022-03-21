import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './../movieCard/MovieCard'
import './movieListing.scss'

function MovieListing() {
  const movies = useSelector((state) => state.movies.movies)
  const shows = useSelector((state) => state.movies.shows)
  // console.log('movies:', movies)
  // console.log('shows:', shows)

  let renderMovies,
    renderShows = ''

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

  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className='shows-error'>
        <h3>{shows.Error}</h3>
      </div>
    )

  return (
    <>
      <div className='movie-list'>
        <h2>movies</h2>
        <div className='movie-container'>{renderMovies}</div>
      </div>
      <div className='show-list'>
        <h2>shows</h2>
        <div className='show-container'>{renderShows}</div>
      </div>
    </>
  )
}

export default MovieListing
