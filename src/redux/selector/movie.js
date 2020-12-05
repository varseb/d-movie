import { createSelector } from 'reselect'

export const getMovies = createSelector(
  ({ movie }) => movie,
  (movie) => (movie.list || []).map(id => movie.movies[id])
)

export const getGenres = createSelector(
  ({ movie }) => movie.movies,
  ({ genre }) => genre.movie,
  ({ id }) => id,
  (movies, genres, id) => movies[id].genre_ids.map(id => genres[id])
)

export const filterMovies = createSelector(
  ({ movies }) => movies,
  ({ rating }) => rating,
  (movies, rating) => movies.filter(
    ({ vote_average }) => vote_average && (vote_average > rating - 2 && vote_average <= rating)
  )
)
