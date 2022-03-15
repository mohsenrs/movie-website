import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { APIkey } from './../../common/MovieApiKey'
import MovieApi from '../../common/MovieApi'

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const response = await MovieApi.get(`?apikey=${APIkey}&s=Harry&type=movie`)

    return response.data
  }
)

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async () => {
    const response = await MovieApi.get(
      `?apikey=${APIkey}&s=Friends&type=series`
    )

    return response.data
  }
)

const initialState = {
  movies: {},
  shows: {},
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers: {
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log('fulfilled')
      state.movies = action.payload
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      console.log('fulfilled')
      state.shows = action.payload
    },
  },
})

export default movieSlice
