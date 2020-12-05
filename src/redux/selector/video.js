import { createSelector } from 'reselect'

export const getMovieVideos = createSelector(
  ({ video }) => video.movie,
  ({ user }) => user.language,
  ({ id }) => id,
  (videos, language, id) => videos[id] ? videos[id][language] || [] : []
)

export const getSerieVideos = createSelector(
  ({ video }) => video.serie,
  ({ user }) => user.language,
  ({ id }) => id,
  (videos, language, id) => videos[id] ? videos[id][language] || [] : []
)