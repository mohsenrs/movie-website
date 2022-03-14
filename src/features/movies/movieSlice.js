import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: {},
  shows: {},
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload
    },
    addShows: (state, { payload }) => {
      state.shows = payload
    },
  },
})

export const moviesActions = movieSlice.actions
export default movieSlice
