import React from 'react'
import { connect } from 'redux/app'
import Image from 'component/Layout/Image'

const Backdrop = ({
  movie: {
    backdrop_path,
    poster_path
  },
  config
}) => {
  const path = backdrop_path || poster_path
  const src  = [ config.secure_base_url, 'w780', path ].join('')

  return (
    <div className="ui-backdrop">
      {path && (
        <Image src={src} />
      )}
    </div>
  )
}

export default connect(
  ({ config }) => ({
    config: config.images
  }),
  null,
  Backdrop
)
