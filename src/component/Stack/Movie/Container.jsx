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
  getCredits,
  getVideos,
  openCast
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
      getCredits({ id })
    },
    [ id, getCredits ]
  )

  useEffect(
    () => {
      getVideos({ id, language })
    },
    [ id, language, getVideos ]
  )

  const principalCast = useMemo(
    () => {
      const principal = cast.slice(0,3).map(({ name }) => name)

      if( principal.length !== cast.length ){
        principal[2] = `${principal[2]} +${cast.length - principal.length}`
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
      isCastUpdated={isCastUpdated}
      isDirectorUpdated={isDirectorUpdated}
      isVideosUpdated={isVideosUpdated}
    />
  )
}

export default connect(
  ({ user, movie, genre, status }, { id }) => ({
    language: user.language,
    movie: movie.movies[id],
    genres: selector.genre.getGenres({ genre, movie, id }),
    cast: selector.movie.getCast({ movie, id }),
    director: selector.movie.getDirector({ movie, id }),
    videos: selector.movie.getYouTubeVideos({ movie, user, id }),
    loadingCredits: status.loading['movie/GET_CREDITS']
  }),
  {
    getMovie: action.movie.getMovie,
    getCredits: action.movie.getCredits,
    getVideos: action.movie.getVideos,
    openCast: action.layout.openStack('cast')
  },
  MovieStackContainer
)
