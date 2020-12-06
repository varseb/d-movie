import { connect } from 'redux/app'
import Image from 'component/Layout/Image'

const WatchProviders = ({ providers, config }) => (
  <div className="media-watch-providers">
    {providers.map(({ provider_name, logo_path, provider_id }) => {
      const src = [ config.secure_base_url, 'w92', logo_path ].join('')

      return (
        <div key={provider_id}>
          <Image src={src} width={24} height={24} />
          <div>
            {provider_name}
          </div>
        </div>
      )}
    )}
  </div>
)

export default connect(
  ({ config }) => ({
    config: config.images
  }),
  null,
  WatchProviders
)
