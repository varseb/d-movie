import { createSelector } from 'reselect'

export const getMovies = createSelector(
  ({ movie }) => movie,
  (movie) => (movie.list || []).map(movieId => movie.movies[movieId])
)
