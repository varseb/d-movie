import React from 'react'
import { register } from 'redux/app'

const Poster = ({ size = 'w500', backdrop = false, movie, config }) => {

  const posterUrl = [
    config.base_url,
    size,
    backdrop ? movie.backdrop_path : movie.poster_path
  ].join('')

  return (
    <div className="ui-poster">
      <img src={posterUrl} alt="" />
    </div>
  )
}

export default register(
  ({ config, movie }, { id }) => ({
    movie: movie.movies[id],
    config: config.images
  }),
  null,
  Poster
)
