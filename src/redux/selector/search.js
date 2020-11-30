import { createSelector } from 'reselect'
import { getMovies } from './movie'

export const getResults = createSelector(
  ({ movie }) => movie,
  ({ person }) => person,
  ({ search }) => [search.query, search.filter.rating, search.results],
  (movie, person, [query, rating, results]) => {
    let items

    if( query ){
      items = (results[query] || []).map(
        ({ id, media_type }) => {
          if( media_type === 'movie' ){
            return movie.movies[id]
          }

          if( media_type === 'person' ){
            return person.persons[id]
          }

          return {
            id,
            media_type
          }
        }
      )
    }
    else {
      items = getMovies({ movie })
    }

    items = items.filter(({ media_type }) => media_type !== 'tv')


    const popularity = items.reduce((acc, item) => ({
      ...acc,
      [item.media_type]: (acc[item.media_type] || 0) + (item.popularity || 0)
    }), {})


    const topResult = { ...items[0] }

    popularity[topResult.media_type] -= (topResult.popularity || 0)

    //console.log(popularity)


    items.sort((a, b) => {
      if( b.id === topResult.id ){
        return 1
      }

      return popularity[b.media_type] - popularity[a.media_type]
    })


    //console.log(topResult)


    /*
    if( rating !== null ){
      items = filterMovies({ movies: items, rating })
    }
    */

    //console.log('SELECTOR RESUTS', items)

    return items.slice(0, 20)
  }
)