import React, { useEffect } from 'react'
import { connect, selector, action } from 'redux/app'
import Poster from 'component/Movie/Poster'

const Main = ({
  movies,
  language,
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
      getGenres({ language })
    },
    [ language, getGenres ]
  )

  useEffect(
    () => {
      discoverMovies({ language })
    },
    [ language, discoverMovies ]
  )

  useEffect(
    () => {
      const visibilityEvent = () => {
        if( !document.hidden ){
          discoverMovies({ language })
        }
      }

      document.addEventListener('visibilitychange', visibilityEvent)

      return () => {
        document.removeEventListener('visibilitychange', visibilityEvent)
      }
    },
    [ language, discoverMovies ]
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

export default connect(
  ({ user, movie }) => ({
    language: user.language,
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
