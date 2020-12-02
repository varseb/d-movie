import { connect } from 'redux/app'
import Image from 'component/Layout/Image'

const Poster = ({
  movie: {
    title,
    poster_path
  },
  config,
  onClick,
  size = 'w500'
}) => {
  const src = [ config.secure_base_url, size, poster_path ].join('')

  return (
    <div className="ui-poster" onClick={onClick}>
      <div className="ui-poster-content">
        {poster_path && (
          <Image src={src} />
        )}

        {!poster_path && (
          <div className="ui-poster-holder">
            {title}
          </div>
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
