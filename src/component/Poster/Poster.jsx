import React, { useState } from 'react'
import classnames from 'classnames'
import { register } from 'redux/app'

const Poster = ({
  size = 'w500',
  backdrop = false,
  onClick = null,
  movie: { backdrop_path, poster_path },
  config
}) => {
  const [loaded, setLoaded] = useState(false)

  const posterUrl = [
    config.base_url,
    size,
    backdrop ? backdrop_path || poster_path : poster_path
  ].join('')

  const onLoad = () => {
    setLoaded(true)
  }

  return (
    <div
      onClick={onClick}
      className={classnames('ui-poster', {
        backdrop,
        'has-click': onClick
      })}
    >
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
