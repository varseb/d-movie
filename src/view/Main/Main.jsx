import React, { useEffect } from 'react'
import { register, selector, action } from 'redux/app'
import Poster from 'component/Poster'

const Main = ({ movies, discoverMovies, getConfiguration, openMovie }) => {
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

  return (
    <div className="movie-grid">
      {movies.map(({ id, title }) => (
        <div key={id} className="movie-grid-item" onClick={() => openMovie({ id })}>
          <Poster id={id} />
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
    openMovie: action.layout.openStack('movie')
  },
  Main
)
