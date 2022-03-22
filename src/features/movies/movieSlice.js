import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { APIkey } from './../../common/MovieApiKey'
import MovieApi from '../../common/MovieApi'

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (term) => {
    const response = await MovieApi.get(
      `?apikey=${APIkey}&s=${term}&type=movie`
    )

    return response.data
  }
)

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async (term) => {
    const response = await MovieApi.get(
      `?apikey=${APIkey}&s=${term}&type=series`
    )

    return response.data
  }
)

export const fetchAsyncDetail = createAsyncThunk(
  'movies/fetchAsyncDetail',
  async (id) => {
    const response = await MovieApi.get(`?apikey=${APIkey}&i=${id}&Plot=full`)

    return response.data
  }
)

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedDetail: (state) => {
      state.selectedMovieOrShow = {}
    },
  },
  extraReducers: {
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log('fulfilled')
      state.movies = action.payload
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      state.shows = action.payload
    },
    [fetchAsyncDetail.fulfilled]: (state, action) => {
      state.selectedMovieOrShow = action.payload
    },
  },
})

export const { removeSelectedDetail } = movieSlice.actions
export default movieSlice
