import React, { useEffect } from 'react'
import { useTitle, useUpdateCheck } from 'hook'
import { connect, selector, action } from 'redux/app'
import { apiLogo } from 'env'
import Poster from 'component/Movie/Poster'
import Rating from 'component/Movie/Rating'
import Info from 'component/Movie/Info'
import Genres from 'component/Movie/Genres'
import Credits from 'component/Movie/Credits'
import Videos from 'component/Movie/Videos'
import classnames from 'classnames'

const MovieStack = ({
  id,
  language,
  movie: {
    title,
    vote_average,
    release_date,
    runtime,
    overview,
    original_language
  },
  genres,
  cast,
  director,
  videos,
  loadingCredits,
  getMovie,
  getCredits,
  getVideos
}) => {
  useTitle(title)

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

  const isCastUpdated = useUpdateCheck(cast.length)
  const isDirectorUpdated = useUpdateCheck(director?.name)
  const isVideosUpdated = useUpdateCheck(videos.length)

  return (
    <>
      <div className="movie-stack-backdrop">
        <Poster id={id} size="w1280" backdrop />

        <img
          className="thanks-themoviedb"
          src={apiLogo}
          alt=""
        />
      </div>

      <div className="movie-stack-content">
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

        <p className="movie-stack-overview">
          {overview}
        </p>

        {genres.length > 0 && (
          <div className="movie-stack-genres">
            <Genres genres={genres} />
          </div>
        )}

        {cast.length > 0 && (
          <div className={classnames('movie-stack-credits', { 'fade-in': isCastUpdated })}>
            <Credits
              title="Cast"
              value={cast.map(({ name }) => name).reduce((prev, curr) => [prev, ', ', curr])}
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
              VIDEOS
            </div>

            <div className="movie-stack-videos-wrap scroll-lock-ignore">
              <Videos videos={videos} />
            </div>
          </div>
        )}
      </div>
    </>
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
    getVideos:  action.movie.getVideos
  },
  MovieStack
)
