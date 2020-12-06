import { createSelector } from 'reselect'

export const getMovieCast = createSelector(
  ({ credit }, id) => credit.movie[id],
  ({ person }) => person.persons,
  (credits, persons) => (credits ? credits.cast : []).map(
    ({ id, credit_id, character }) => ({
      ...persons[id],
      credit_id,
      character
    })
  )
)

export const getMovieDirector = createSelector(
  ({ credit }, id) => credit.movie[id],
  ({ person }) => person.persons,
  (credits, persons) => credits && credits.director && persons[credits.director.id]
)

export const getSerieCast = createSelector(
  ({ credit }, id) => credit.serie[id],
  ({ person }) => person.persons,
  (credits, persons) => (credits ? credits.cast : []).map(
    ({ id, credit_id, character }) => ({
      ...persons[id],
      credit_id,
      character
    })
  )
)
