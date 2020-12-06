import { createSelector } from 'reselect'

export const getGenres = createSelector(
  ({ serie }, id) => serie.series[id],
  ({ genre }) => genre.serie,
  (serie, genres) => serie.genre_ids.map(id => genres[id])
)
