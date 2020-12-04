import { useEffect, useMemo } from 'react'
import { useTitle, useUpdateCheck } from 'hook'
import { connect, selector, action } from 'redux/app'
import SerieStack from './Serie'

const SerieStackContainer = ({
  id,
  language,
  serie,
  genres,
  //cast,
  //director,
  //videos,
  //loadingCredits,
  getSerie,
  //getCredits,
  //getVideos,
  //openCast
}) => {
  useTitle(serie.name)

  useEffect(
    () => {
      getSerie({ id, language })
    },
    [ id, language, getSerie ]
  )

  /*
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
        principal.push(`+${cast.length - principal.length}`)
      }

      return principal
    },
    [ cast ]
  )

  const isCastUpdated = useUpdateCheck(principalCast.length)
  const isDirectorUpdated = useUpdateCheck(director?.name)
  const isVideosUpdated = useUpdateCheck(videos.length)
*/
  return (
    <SerieStack
      id={id}
      serie={serie}
      genres={genres}
      //cast={principalCast}
      //director={director}
      //videos={videos}
      //loadingCredits={loadingCredits}
      //openCast={openCast}
      //isCastUpdated={isCastUpdated}
      //isDirectorUpdated={isDirectorUpdated}
      //isVideosUpdated={isVideosUpdated}
    />
  )
}

export default connect(
  ({ user, serie, genre, status }, { id }) => ({
    language: user.language,
    serie: serie.series[id],
    genres: selector.serie.getGenres({ serie, genre, id }),
    //cast: selector.movie.getCast({ movie, id }),
    //director: selector.movie.getDirector({ movie, id }),
    //videos: selector.movie.getYouTubeVideos({ movie, user, id }),
    //loadingCredits: status.loading['movie/GET_CREDITS']
  }),
  {
    getSerie: action.serie.getSerie,
    //getCredits: action.movie.getCredits,
    //getVideos: action.movie.getVideos,
    //openCast: action.layout.openStack('cast')
  },
  SerieStackContainer
)
