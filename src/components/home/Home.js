import React, { useEffect } from 'react'
import MovieListing from './../movieListing/MovieListing'
import MovieApi from '../../common/MovieApi'
import { APIkey } from '../../common/MovieApiKey'
import { useDispatch } from 'react-redux'
import { moviesActions } from './../../features/movies/movieSlice'
import { showsActions } from './../../features/shows/showSlice';

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await MovieApi.get(
        `?apikey=${APIkey}&s=Harry&type=movie`
      ).catch((err) => console.log('err:', err))

      dispatch(moviesActions.addMovies(response.data))
    }

    const fetchShow = async () => {
      const response = await MovieApi.get(
        `?apikey=${APIkey}&s=Friends&type=series`
      ).catch((err) => console.log('err:', err))

      console.log('shows:', response.data);

      dispatch(showsActions.addShows(response.data))
    }

    fetchMovie()
    fetchShow()
  }, [])

  return (
    <>
      <div className='banner-image'></div>
      <MovieListing />
    </>
  )
}

export default Home
