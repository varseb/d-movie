import { createSelector } from 'reselect'

export const getGenres = createSelector(
  ({ genre }) => genre.genres,
  ({ movie }) => movie.movies,
  ({ id }) => id,
  (genres, movies, id) => movies[id].genre_ids.map(id => genres[id])
)
