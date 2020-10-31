import React, { useState } from 'react'
import classnames from 'classnames'
import { register } from 'redux/app'

const Poster = ({ size = 'w500', backdrop = false, movie, config }) => {

  const [loaded, setLoaded] = useState(false)

  const posterUrl = [
    config.base_url,
    size,
    backdrop ? movie.backdrop_path : movie.poster_path
  ].join('')

  const onLoad = () => {
    setLoaded(true)
  }

  return (
    <div className="ui-poster">
      <img
        alt=""
        className={classnames({ loaded })}
        src={posterUrl}
        onLoad={onLoad}
      />
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
