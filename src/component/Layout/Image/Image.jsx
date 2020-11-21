import React, { useState } from 'react'
import classnames from 'classnames'

const Image = ({ onLoad, ...props }) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const handleLoad = () => {
    setLoaded(true)
    onLoad && onLoad()
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
