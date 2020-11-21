import { createSelector } from 'reselect'

export const getMovies = createSelector(
  ({ movie }) => movie,
  (movie) => (movie.list || []).map(id => movie.movies[id])
)

export const getCast = createSelector(
  ({ movie }) => movie.credits,
  ({ id }) => id,
  (credits, id) => credits[id] ? credits[id].cast : []
)

export const getDirector = createSelector(
  ({ movie }) => movie.credits,
  ({ id }) => id,
  (credits, id) => credits[id] ? credits[id].crew.find(({ job }) => job === 'Director') : null
)

export const getYouTubeVideos = createSelector(
  ({ movie }) => movie.videos,
  ({ user }) => user.language,
  ({ id }) => id,
  (videos, language, id) => (videos[id] ? videos[id][language] || [] : []).filter(({ site }) => site === 'YouTube')
)

export const filterMovies = createSelector(
  ({ movies }) => movies,
  ({ rating }) => rating,
  (movies, rating) => movies.filter(({ vote_average }) => vote_average && (vote_average > rating - 2 && vote_average <= rating))
)

export const getResults = createSelector(
  ({ movie }) => movie,
  ({ search }) => [search.query, search.filter.rating, search.results],
  (movie, [query, rating, results]) => {
    let movies

    if( query ){
      movies = (results[query] || []).map(id => movie.movies[id])
    }
    else {
      movies = getMovies({ movie })
    }

    if( rating !== null ){
      movies = filterMovies({ movies, rating })
    }

    return movies.slice(0, 20)
  }
)
