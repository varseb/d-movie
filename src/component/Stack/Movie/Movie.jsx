import React from 'react'
import moment from 'moment'
import Stack from 'component/Layout/Stack'
import Poster from 'component/Poster'
import { register, action } from 'redux/app'

const MovieStack = ({ movie, closeStack }) => (
  <Stack className="movie-stack" closeStack={closeStack}>
    <div className="movie-stack-backdrop">
      <Poster id={movie.id} size="w1280" backdrop />
    </div>

    <div className="movie-stack-content">


      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>{moment(movie.release_date).format('MMMM Y')}</p>
    </div>
  </Stack>
)

export default register(
  ({ movie }, { id }) => ({
    movie: movie.movies[id],
  }),
  {
    closeStack: action.layout.closeStack('movie')
  },
  MovieStack
)
