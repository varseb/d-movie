import { createSelector } from 'reselect'

export const getMovies = createSelector(
  ({ movie }) => movie,
  (movie) => (movie.list || []).map(id => movie.movies[id])
)

export const filterMovies = createSelector(
  ({ movies }) => movies,
  ({ rating }) => rating,
  (movies, rating) => movies.filter(({ vote_average }) => vote_average && (vote_average >= rating && vote_average < rating + 2))
)

export const getResults = createSelector(
  ({ movie }) => movie,
  ({ search }) => search,
  (movie, search) => {
    const { query, filter: { rating }, results } = search

    let movies

    if( query ){
      movies = (results[query] || []).map(id => movie.movies[id])
    }
    else {
      movies = getMovies({ movie })
    }

    if( rating !== null ){
      return filterMovies({ movies, rating })
    }

    return movies
  }
)
