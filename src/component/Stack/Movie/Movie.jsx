import classnames from 'classnames'
import { apiLogo } from 'env'
import TextClamp from 'component/Layout/TextClamp'
import Info from 'component/Movie/Info'
import Backdrop from 'component/Media/Backdrop'
import Rating from 'component/Media/Rating'
import Genres from 'component/Media/Genres'
import Credits from 'component/Media/Credits'
import Videos from 'component/Media/Videos'

const MovieStack = ({
  id,
  movie,
  genres,
  cast,
  director,
  videos,
  loadingCredits,
  openCast,
  openPerson,
  isCastUpdated,
  isDirectorUpdated,
  isVideosUpdated
}) => {
  const {
    title,
    vote_average,
    release_date,
    runtime,
    overview,
    original_language
  } = movie

  return (
    <div className="movie-stack">
      <div className="movie-stack-backdrop">
        <Backdrop media={movie} />

        <img
          className="thanks-themoviedb"
          src={apiLogo}
          alt=""
        />
      </div>

      <div className="movie-stack-content">
        <div className="movie-stack-head show-up-primary">
          <h1 className="movie-stack-title">
            {title}
          </h1>

          {vote_average > 0 && (
            <div className="movie-stack-rating">
              <Rating voteAverage={vote_average} />
            </div>
          )}

          {(release_date || original_language || runtime > 0) && (
            <div className="movie-stack-info">
              <Info
                release_date={release_date}
                original_language={original_language}
                runtime={runtime}
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
              onClick={() => openCast({ id, media: 'movie' })}
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

          {director && (
            <div
              onClick={() => openPerson({ personId: director.id })}
              className={classnames('movie-stack-credits ui-tapable', {
                'fade-in': isDirectorUpdated
              })}
            >
              <Credits
                title="Director"
                value={director.name}
              />
            </div>
          )}

          {((cast.length > 0 || director || !loadingCredits) && videos.length > 0) && (
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

export default MovieStack
