import { useState } from 'react'
import { connect } from 'redux/app'
import classnames from 'classnames'
import Image from 'component/Layout/Image'

const sizeMap = {
   x50: 'w185',
  x185: 'h632'
}

const Picture = ({
  size = 'x50',
  person: {
    profile_path
  },
  config,
  placeholder
}) => {
  const [ path ] = useState(profile_path)
  const hold = [ config.secure_base_url, sizeMap[placeholder], path ].join('')
  const src  = [ config.secure_base_url, sizeMap[size], profile_path ].join('')

  return (
    <div
      className={classnames('ui-person-picture', {
        'no-image': !profile_path
      })}
    >
      {placeholder && path && (
        <Image src={hold} />
      )}

      {profile_path && (
        <Image src={src} key={src} />
      )}
    </div>
  )
}

export default connect(
  ({ config }) => ({
    config: config.images
  }),
  null,
  Picture
)
