import React, { useEffect } from 'react'
import { register, selector, action } from 'redux/app'
import Poster from 'component/Movie/Poster'

const Main = ({
  movies,
  getConfiguration,
  getGenres,
  discoverMovies,
  openMovie
}) => {
  useEffect(
    () => {
      getConfiguration()
    },
    [ getConfiguration ]
  )

  useEffect(
    () => {
      getGenres()
    },
    [ getGenres ]
  )

  useEffect(
    () => {
      discoverMovies()
    },
    [ discoverMovies ]
  )

  return (
    <div className="movie-grid">
      {movies.map(({ id, title }) => (
        <div key={id} className="movie-grid-item">
          <Poster id={id} onClick={() => openMovie({ id })} />
        </div>
      ))}
    </div>
  )
}

export default register(
  ({ movie }) => ({
    movies: selector.movie.getMovies({ movie })
  }),
  {
    getConfiguration: action.config.getConfiguration,
    getGenres: action.genre.getGenres,
    discoverMovies: action.movie.discoverMovies,
    openMovie: action.layout.openStack('movie')
  },
  Main
)
