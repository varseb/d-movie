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
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>{moment(movie.release_date).format('MMMM Y')}</p>

      {genres.map(({ id, name }) => (
        <span key={id}>
          {name}
        </span>
      ))}
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
