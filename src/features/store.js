import movieSlice from './movies/movieSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: { movies: movieSlice.reducer },
})

export default store
