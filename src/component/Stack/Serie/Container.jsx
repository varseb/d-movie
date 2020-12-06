import { useEffect, useMemo } from 'react'
import { useTitle, useUpdateCheck } from 'hook'
import { connect, selector, action } from 'redux/app'
import SerieStack from './Serie'

const SerieStackContainer = ({
  id,
  language,
  country,
  serie,
  genres,
  cast,
  videos,
  providers,
  loadingCredits,
  getSerie,
  getSerieProviders,
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
      getSerieProviders({ id, country })
    },
    [ id, country, getSerieProviders ]
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
      providers={providers}
      loadingCredits={loadingCredits}
      openCast={openCast}
      isCastUpdated={isCastUpdated}
      isVideosUpdated={isVideosUpdated}
    />
  )
}

export default connect(
  ({ user, serie, genre, credit, person, status, video, watch }, { id }) => ({
    language: user.language,
    country: user.country,
    serie: serie.series[id],
    genres: selector.serie.getGenres({ serie, genre }, id),
    cast: selector.credit.getSerieCast({ credit, person }, id),
    videos: selector.video.getSerieVideos({ video, user }, id),
    providers: selector.watch.getSerieProviders({ watch, user }, id),
    loadingCredits: status.loading['credit/GET_SERIE_CREDITS']
  }),
  {
    getSerie: action.serie.getSerie,
    getSerieProviders: action.watch.getSerieProviders,
    getSerieCredits: action.credit.getSerieCredits,
    getSerieVideos: action.video.getSerieVideos,
    openCast: action.layout.openStack('cast')
  },
  SerieStackContainer
)
