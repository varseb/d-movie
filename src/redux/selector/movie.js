import { createSelector } from 'reselect'

export const getMovies = createSelector(
  ({ movie }) => movie,
  (movie) => (movie.list || []).map(id => movie.movies[id])
)

export const getGenres = createSelector(
  ({ movie }, id) => movie.movies[id],
  ({ genre }) => genre.movie,
  (movie, genres) => movie.genre_ids.map(id => genres[id])
)

export const filterMovies = createSelector(
  ({ movies }) => movies,
  ({ rating }) => rating,
  (movies, rating) => movies.filter(
    ({ vote_average }) => vote_average && (vote_average > rating - 2 && vote_average <= rating)
  )
)
