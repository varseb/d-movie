import { createSelector } from 'reselect'

export const isLoading = createSelector(
  ({ status }) => status.loading,
  (loading) => Object.values(loading).some(stillLoading => stillLoading)
)
