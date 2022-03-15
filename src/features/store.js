import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './movies/movieSlice'

const store = configureStore({
  reducer: { movies: movieSlice.reducer },
})

export default store
