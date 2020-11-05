import React, { useEffect } from 'react'
import { register, selector, action } from 'redux/app'
import Poster from 'component/Poster'

const Main = ({ movies, discoverMovies, getConfiguration, getGenres, openMovie }) => {
  useEffect(
    () => {
      discoverMovies()
    },
    [ discoverMovies ]
  )

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
    discoverMovies: action.movie.discoverMovies,
    getConfiguration: action.config.getConfiguration,
    getGenres: action.genre.getGenres,
    openMovie: action.layout.openStack('movie')
  },
  Main
)
