import { createSelector } from 'reselect'

export const getMovieVideos = createSelector(
  ({ video }, id) => video.movie[id],
  ({ user }) => user.language,
  (videos, language) => videos ? videos[language] || [] : []
)

export const getSerieVideos = createSelector(
  ({ video }, id) => video.serie[id],
  ({ user }) => user.language,
  (videos, language) => videos ? videos[language] || [] : []
)
