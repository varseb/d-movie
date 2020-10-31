import { createSelector } from 'reselect'

export const getGenres = createSelector(
  ({ genre }) => genre.genres,
  ({ movie }) => movie.genre_ids,
  (genres, genre_ids) => genre_ids.map(id => genres[id])
)
