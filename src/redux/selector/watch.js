import { createSelector } from 'reselect'

export const getMovieProviders = createSelector(
  ({ watch }, id) => watch.movie[id],
  ({ user }) => user.country,
  (providers, country) => providers ? providers[country] || [] : []
)

export const getSerieProviders = createSelector(
  ({ watch }, id) => watch.serie[id],
  ({ user }) => user.country,
  (providers, country) => providers ? providers[country] || [] : []
)
