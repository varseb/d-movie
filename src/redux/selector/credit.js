import { createSelector } from 'reselect'

export const getMovieCast = createSelector(
  ({ credit }) => credit.movie,
  ({ person }) => person.persons,
  ({ id }) => id,
  (credits, persons, id) => (credits[id] ? credits[id].cast : []).map(
    ({ id, credit_id, character }) => ({
      ...persons[id],
      credit_id,
      character
    })
  )
)

export const getMovieDirector = createSelector(
  ({ credit }) => credit.movie,
  ({ person }) => person.persons,
  ({ id }) => id,
  (credits, persons, id) => credits[id] && credits[id].director && persons[credits[id].director.id]
)

export const getSerieCast = createSelector(
  ({ credit }) => credit.serie,
  ({ person }) => person.persons,
  ({ id }) => id,
  (credits, persons, id) => (credits[id] ? credits[id].cast : []).map(
    ({ id, credit_id, character }) => ({
      ...persons[id],
      credit_id,
      character
    })
  )
)
