import React, { useEffect } from 'react'
import { register, selector, action } from 'redux/app'
import Stack from 'component/Layout/Stack'
import Poster from 'component/Poster'
import Rating from 'component/Rating'
import Info from 'component/Info'
import Genres from 'component/Genres'
import Credits from 'component/Credits'


const MovieStack = ({
  id,
  movie: { title, vote_average, release_date, runtime, overview },
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
          {title}
        </h1>

        {vote_average > 0 && (
          <div className="movie-stack-rating">
            <Rating voteAverage={vote_average} />
          </div>
        )}

        {(release_date || runtime > 0) && (
          <div className="movie-stack-info">
            <Info releaseDate={release_date} runTime={runtime} />
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
          <div className="movie-stack-credits fade-in">
            <Credits
              title="Cast"
              value={cast.map(actor => actor.name).reduce((prev, curr) => [prev, ', ', curr])}
            />
          </div>
        )}

        {director && (
          <div className="movie-stack-credits fade-in">
            <Credits
              title="Director"
              value={director.name}
            />
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
