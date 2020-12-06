import { createSelector } from 'reselect'

export const getKnownFor = createSelector(
  ({ movie }) => movie.movies,
  ({ person }, personId) => person.movies[personId],
  (movies, credits, personId) => {
    let list = (credits || []).map(id => movies[id])

    list.sort((a,b) => b.popularity - a.popularity)

    return list.slice(0, 25)
  }
)
