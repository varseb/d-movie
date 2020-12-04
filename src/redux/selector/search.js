import { createSelector } from 'reselect'
import { getMovies } from './movie'

export const getResults = createSelector(
  ({ movie }) => movie,
  ({ serie }) => serie.series,
  ({ person }) => person.persons,
  ({ search }) => [search.query, search.filter.rating, search.results],
  (movie, series, persons, [query, rating, results]) => {
    const source = {
      movie: movie.movies,
      person: persons,
      tv: series
    }

    let items

    if( query ){
      items = (results[query] || []).map(
        ({ id, media_type }) => source[media_type][id]
      )
    }
    else {
      items = getMovies({ movie })
    }

    if( !items.length ){
      return []
    }

    const topResultId = items[0].id

    const popularity = items.reduce(
      (counter, { id, media_type, popularity }) => ({
        ...counter,
        [media_type]: (counter[media_type] || 0) + (id !== topResultId ? popularity || 0 : 0)
      }),
      {}
    )

    items.sort((a, b) => {
      if( b.id === topResultId ){
        return 1
      }

      return popularity[b.media_type] - popularity[a.media_type]
    })

    /*
    if( rating !== null ){
      items = filterMovies({ movies: items, rating })
    }
    */

    return items.slice(0, 20)
  }
)
