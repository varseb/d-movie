import { connect } from 'redux/app'
import Image from 'component/Layout/Image'

const Backdrop = ({
  media: {
    backdrop_path,
    poster_path
  },
  config
}) => {
  const path = backdrop_path || poster_path
  const src  = [ config.secure_base_url, 'w780', path ].join('')

  return (
    <div className="media-backdrop">
      {path && (
        <Image src={src} />
      )}

      {!path && (
        <div className="media-backdrop-holder" />
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
