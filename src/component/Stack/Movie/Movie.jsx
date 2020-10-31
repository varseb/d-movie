import React from 'react'
import moment from 'moment'
import Stack from 'component/Layout/Stack'
import Poster from 'component/Poster'
import { register, selector, action } from 'redux/app'

const MovieStack = ({ movie, genres, closeStack }) => (
  <Stack className="movie-stack" closeStack={closeStack}>
    <div className="movie-stack-backdrop">
      <Poster id={movie.id} size="w1280" backdrop />
    </div>

    <div className="movie-stack-content">
      <h1 className="movie-stack-title">
        {movie.title}
      </h1>
      <div className="movie-stack-date">
        {moment(movie.release_date).format('Y')}
      </div>
      <p className="movie-stack-overview">
        {movie.overview}
      </p>

      {genres.length > 0 && (
        <ul className="movie-stack-genres">
          {genres.map(({ id, name }) => (
            <li key={id}>
              {name}
            </li>
          ))}
        </ul>
      )}

      <div className="movie-stack-rating">
        <div className="movie-stack-rating-number">
          {movie.vote_average}
        </div>
      </div>
    </div>
  </Stack>
)

export default register(
  ({ movie, genre }, { id }) => ({
    movie: movie.movies[id],
    genres: selector.genre.getGenres({
      genre,
      movie: movie.movies[id]
    })
  }),
  {
    closeStack: action.layout.closeStack('movie')
  },
  MovieStack
)
