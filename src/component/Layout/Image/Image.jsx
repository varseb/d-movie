import { useState } from 'react'
import classnames from 'classnames'

const Image = props => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const handleLoad = () => {
    setLoaded(true)
  }

  const handleError = () => {
    setError(true)
  }

  return (
    <img
      alt=""
      className={classnames('ui-image', { loaded, error })}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  )
}

export default Image
