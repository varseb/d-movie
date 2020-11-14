import React, { useState } from 'react'
import classnames from 'classnames'
import { connect } from 'redux/app'

const Poster = ({
  size = 'w500',
  backdrop = false,
  onClick = null,
  movie: { title, backdrop_path, poster_path },
  config
}) => {
  const [loaded, setLoaded] = useState(false)

  const path = backdrop ? backdrop_path || poster_path : poster_path

  const posterUrl = [config.secure_base_url, size, path].join('')

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
      <div className={classnames("ui-poster-content", { 'no-image': !path, loaded })}>
        {path && (
          <img
            alt=""
            key={posterUrl}
            src={posterUrl}
            onLoad={onLoad}
          />
        )}

        {!path && !backdrop && (
          <div className="ui-poster-title">{title}</div>
        )}
      </div>
    </div>
  )
}

export default connect(
  ({ config, movie }, { id }) => ({
    movie: movie.movies[id],
    config: config.images
  }),
  null,
  Poster
)
