import { useState } from 'react'
import classnames from 'classnames'
import TextClamp from 'component/Layout/TextClamp'
import Backdrop from 'component/Media/Backdrop'
import Rating from 'component/Media/Rating'
import Info from 'component/Serie/Info'
import Genres from 'component/Media/Genres'
import Credits from 'component/Media/Credits'
import Videos from 'component/Media/Videos'
import Availability from 'component/Media/Watch/Availability'
import Providers from 'component/Media/Watch/Providers'

const SerieStack = ({
  id,
  serie,
  genres,
  cast,
  videos,
  providers,
  loadingCredits,
  openCast,
  isCastUpdated,
  isVideosUpdated
}) => {
  const {
    name,
    vote_average,
    first_air_date,
    number_of_seasons,
    overview,
    original_language
  } = serie

  const [showProviders, setShowProviders] = useState(false)

  return (
    <div className="movie-stack">
      <div className="movie-stack-backdrop">
        <Backdrop media={serie} />

        {providers.length > 0 && (
          <div onClick={() => setShowProviders(!showProviders)}>
            <Availability />
          </div>
        )}
      </div>

      {showProviders && (
        <Providers providers={providers} />
      )}

      <div className="movie-stack-content">
        <div className="movie-stack-head show-up-primary">
          <h1 className="movie-stack-title">
            {name}
          </h1>

          {vote_average > 0 && (
            <div className="movie-stack-rating">
              <Rating voteAverage={vote_average} />
            </div>
          )}

          {(first_air_date || original_language || number_of_seasons > 0) && (
            <div className="movie-stack-info">
              <Info
                first_air_date={first_air_date}
                original_language={original_language}
                number_of_seasons={number_of_seasons}
              />
            </div>
          )}
        </div>

        {overview && (
          <div className="show-up-secondary">
            <div className="movie-stack-overview">
              <TextClamp>
                {overview}
              </TextClamp>
            </div>
          </div>
        )}

        <div className="show-up-tertiary">
          {genres.length > 0 && (
            <div className="movie-stack-genres">
              <Genres genres={genres} />
            </div>
          )}

          {cast.length > 0 && (
            <div
              onClick={() => openCast({ id, media: 'serie' })}
              className={classnames('movie-stack-credits ui-tapable', {
                'fade-in': isCastUpdated
              })}
            >
              <Credits
                title="Cast"
                value={cast.reduce((prev, curr) => [prev, ', ', curr])}
              />
            </div>
          )}

          {((cast.length > 0 || !loadingCredits) && videos.length > 0) && (
            <div className={classnames('movie-stack-videos', { 'fade-in': isVideosUpdated })}>
              <div className="movie-stack-videos-title">
                Videos
              </div>

              <div className="movie-stack-videos-wrap scroll-lock-ignore">
                <Videos videos={videos} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SerieStack
