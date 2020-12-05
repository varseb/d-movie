import { useEffect, useMemo } from 'react'
import { useTitle, useUpdateCheck } from 'hook'
import { connect, selector, action } from 'redux/app'
import SerieStack from './Serie'

const SerieStackContainer = ({
  id,
  language,
  serie,
  genres,
  cast,
  videos,
  loadingCredits,
  getSerie,
  getSerieCredits,
  getSerieVideos,
  openCast
}) => {
  useTitle(serie.name)

  useEffect(
    () => {
      getSerie({ id, language })
    },
    [ id, language, getSerie ]
  )

  useEffect(
    () => {
      getSerieCredits({ id })
    },
    [ id, getSerieCredits ]
  )

  useEffect(
    () => {
      getSerieVideos({ id, language })
    },
    [ id, language, getSerieVideos ]
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
  const isVideosUpdated = useUpdateCheck(videos.length)

  return (
    <SerieStack
      id={id}
      serie={serie}
      genres={genres}
      cast={principalCast}
      videos={videos}
      loadingCredits={loadingCredits}
      openCast={openCast}
      isCastUpdated={isCastUpdated}
      isVideosUpdated={isVideosUpdated}
    />
  )
}

export default connect(
  ({ user, serie, genre, credit, person, status, video }, { id }) => ({
    language: user.language,
    serie: serie.series[id],
    genres: selector.serie.getGenres({ serie, genre, id }),
    cast: selector.credit.getSerieCast({ credit, person, id }),
    videos: selector.video.getSerieVideos({ video, user, id }),
    loadingCredits: status.loading['credit/GET_SERIE_CREDITS']
  }),
  {
    getSerie: action.serie.getSerie,
    getSerieCredits: action.credit.getSerieCredits,
    getSerieVideos: action.video.getSerieVideos,
    openCast: action.layout.openStack('cast')
  },
  SerieStackContainer
)
