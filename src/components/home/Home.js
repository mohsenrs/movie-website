import React, { useEffect } from 'react'
import MovieListing from './../movieListing/MovieListing'
import { useDispatch } from 'react-redux'
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlice'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMovies('Harry'))
    dispatch(fetchAsyncShows('Friends'))
  }, [dispatch])

  return (
    <>
      <div className='banner-image'></div>
      <MovieListing />
    </>
  )
}

export default Home
