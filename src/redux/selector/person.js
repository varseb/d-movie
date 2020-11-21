import { createSelector } from 'reselect'

export const getKnownFor = createSelector(
  ({ movie }) => movie.movies,
  ({ person }) => person.movies,
  ({ personId }) => personId,
  (movies, credits, personId) => {
    let list = (credits[personId] || []).map(id => movies[id])

    list.sort((a,b) => b.popularity - a.popularity)

    return list.slice(0, 25)
  }
)
