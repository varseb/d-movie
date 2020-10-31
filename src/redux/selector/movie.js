import { createSelector } from 'reselect'

export const getMovies = createSelector(
  ({ movie }) => movie,
  (movie) => (movie.list || []).map(id => movie.movies[id])
)

export const getSearchResults = createSelector(
  ({ movie }) => movie,
  ({ search }) => search,
  (movie, search) => (search.results[search.query] || []).map(id => movie.movies[id])
)
