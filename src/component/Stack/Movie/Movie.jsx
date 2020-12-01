import classnames from 'classnames'
import { apiLogo } from 'env'
import TextClamp from 'component/Layout/TextClamp'
import Backdrop from 'component/Movie/Backdrop'
import Rating from 'component/Movie/Rating'
import Info from 'component/Movie/Info'
import Genres from 'component/Movie/Genres'
import Credits from 'component/Movie/Credits'
import Videos from 'component/Movie/Videos'

const MovieStack = ({
  id,
  movie,
  genres,
  cast,
  director,
  videos,
  loadingCredits,
  openCast,
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
        <Backdrop movie={movie} />

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
                releaseDate={release_date}
                originalLanguage={original_language}
                runTime={runtime}
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
              onClick={() => openCast({ id })}
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
            <div className={classnames('movie-stack-credits', { 'fade-in': isDirectorUpdated })}>
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
