import React, { useEffect } from 'react'
import moment from 'moment'
import { register, selector, action } from 'redux/app'
import Stack from 'component/Layout/Stack'
import Poster from 'component/Poster'
import Rating from 'component/Rating'
import Genres from 'component/Genres'


const MovieStack = ({
  id,
  movie,
  genres,
  cast,
  director,
  getMovie,
  getCredits,
  closeStack
}) => {

  useEffect(
    () => {
      getMovie({ id })
      getCredits({ id })
    },
    [ id, getMovie, getCredits ]
  )

  return (
    <Stack className="movie-stack" closeStack={closeStack}>
      <div className="movie-stack-backdrop">
        <Poster id={id} size="w1280" backdrop />
      </div>

      <div className="movie-stack-content">
        <h1 className="movie-stack-title">
          {movie.title}
        </h1>

        {movie.vote_average > 0 && (
          <div className="movie-stack-rating">
            <Rating voteAverage={movie.vote_average} />
          </div>
        )}

        {(movie.release_date || movie.runtime) && (
          <div className="movie-stack-date">
            {movie.release_date && (
              <span>
                {moment(movie.release_date).format('Y')}
              </span>
            )}
            {' '}
            -
            {' '}
            {movie.runtime > 0 && (
              <span className="fade-in">
                {Math.floor(movie.runtime / 60)}h {Math.floor(movie.runtime % 60 % 60)}m
              </span>
            )}
          </div>
        )}

        <p className="movie-stack-overview">
          {movie.overview}
        </p>

        {genres.length > 0 && (
          <div className="movie-stack-genres">
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {cast.length > 0 && (
          <div className="movie-stack-credits fade-in">
            <div className="movie-stack-credits-title">
              Cast
            </div>
            <div className="movie-stack-credits-value">
              {cast.map(actor => actor.name).reduce((prev, curr) => [prev, ', ', curr])}
            </div>
          </div>
        )}

        {director && (
          <div className="movie-stack-credits fade-in">
            <div className="movie-stack-credits-title">
              Director
            </div>
            <div className="movie-stack-credits-value">
              {director.name}
            </div>
          </div>
        )}
      </div>
    </Stack>
  )
}

export default register(
  ({ movie, genre }, { id }) => ({
    movie: movie.movies[id],
    genres: selector.genre.getGenres({ genre, movie, id }),
    cast: selector.movie.getCast({ movie, id }),
    director: selector.movie.getDirector({ movie, id })
  }),
  {
    getMovie: action.movie.getMovie,
    getCredits: action.movie.getCredits,
    closeStack: action.layout.closeStack('movie')
  },
  MovieStack
)
