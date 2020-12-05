import { useEffect, useMemo } from 'react'
import { useTitle, useUpdateCheck } from 'hook'
import { connect, selector, action } from 'redux/app'
import MovieStack from './Movie'

const MovieStackContainer = ({
  id,
  language,
  movie,
  genres,
  cast,
  director,
  videos,
  loadingCredits,
  getMovie,
  getMovieCredits,
  getMovieVideos,
  openCast,
  openPerson
}) => {
  useTitle(movie.title)

  useEffect(
    () => {
      getMovie({ id, language })
    },
    [ id, language, getMovie ]
  )

  useEffect(
    () => {
      getMovieCredits({ id })
    },
    [ id, getMovieCredits ]
  )

  useEffect(
    () => {
      getMovieVideos({ id, language })
    },
    [ id, language, getMovieVideos ]
  )

  const principalCast = useMemo(
    () => {
      const principal = cast.slice(0,3).map(({ name }) => name)

      if( principal.length !== cast.length ){
        principal.push(`+${cast.length - principal.length}`)
      }

      return principal
    },
    [ cast ]
  )

  const isCastUpdated = useUpdateCheck(principalCast.length)
  const isDirectorUpdated = useUpdateCheck(director?.name)
  const isVideosUpdated = useUpdateCheck(videos.length)

  return (
    <MovieStack
      id={id}
      movie={movie}
      genres={genres}
      cast={principalCast}
      director={director}
      videos={videos}
      loadingCredits={loadingCredits}
      openCast={openCast}
      openPerson={openPerson}
      isCastUpdated={isCastUpdated}
      isDirectorUpdated={isDirectorUpdated}
      isVideosUpdated={isVideosUpdated}
    />
  )
}

export default connect(
  ({ user, movie, genre, credit, person, status, video }, { id }) => ({
    language: user.language,
    movie: movie.movies[id],
    genres: selector.movie.getGenres({ movie, genre, id }),
    cast: selector.credit.getMovieCast({ credit, person, id }),
    director: selector.credit.getMovieDirector({ credit, person, id }),
    videos: selector.video.getMovieVideos({ video, user, id }),
    loadingCredits: status.loading['credit/GET_MOVIE_CREDITS']
  }),
  {
    getMovie: action.movie.getMovie,
    getMovieCredits: action.credit.getMovieCredits,
    getMovieVideos: action.video.getMovieVideos,
    openCast: action.layout.openStack('cast'),
    openPerson: action.layout.openStack('person')
  },
  MovieStackContainer
)
