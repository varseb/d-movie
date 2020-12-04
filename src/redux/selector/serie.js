import { createSelector } from 'reselect'

export const getGenres = createSelector(
  ({ serie }) => serie.series,
  ({ genre }) => genre.serie,
  ({ id }) => id,
  (series, genres, id) => series[id].genre_ids.map(id => genres[id] || { id })
)
