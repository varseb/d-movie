import { connect } from 'redux/app'
import Image from 'component/Layout/Image'

const Poster = ({
  media: {
    title,
    name,
    poster_path
  },
  config,
  onClick,
  size = 'w500'
}) => {
  const src = [ config.secure_base_url, size, poster_path ].join('')

  return (
    <div className="media-poster" onClick={onClick}>
      <div className="media-poster-content">
        {poster_path && (
          <Image src={src} />
        )}

        {!poster_path && (
          <div className="media-poster-holder">
            {title || name}
          </div>
        )}
      </div>
    </div>
  )
}

export default connect(
  ({ config }, { id }) => ({
    config: config.images
  }),
  null,
  Poster
)
