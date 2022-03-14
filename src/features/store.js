import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './movies/movieSlice'
import showSlice from './shows/showSlice'

const store = configureStore({
  reducer: { movies: movieSlice.reducer, shows: showSlice.reducer },
})

export default store
