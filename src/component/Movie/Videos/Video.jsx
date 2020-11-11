import React, { useState } from 'react'
import classnames from 'classnames'

const Video = ({ name, videoKey, openVideo }) => {
  const [loaded, setLoaded] = useState(false)

  const onLoad = () => {
    setLoaded(true)
  }

  return (
    <div
      className="ui-videos-item-wrap"
      onClick={() => openVideo({
        title: name,
        videoKey
      })}
    >
      <div className="ui-videos-item">
        <div className={classnames('ui-videos-item-thumb', { loaded })}>
          <img
            alt=""
            src={`https://img.youtube.com/vi/${videoKey}/hqdefault.jpg`}
            onLoad={onLoad}
          />
        </div>
      </div>

      <div className="ui-videos-item-name" title={name}>{name}</div>
    </div>
  )
}

export default Video
