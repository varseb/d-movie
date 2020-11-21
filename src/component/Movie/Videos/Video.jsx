import React from 'react'
import Image from 'component/Layout/Image'

const Video = ({ name, videoKey, openVideo }) => (
  <div
    className="ui-videos-item-wrap"
    onClick={() => openVideo({
      title: name,
      videoKey
    })}
  >
    <div className="ui-videos-item">
      <div className="ui-videos-item-thumb">
        <Image src={`https://img.youtube.com/vi/${videoKey}/hqdefault.jpg`} />
      </div>
    </div>

    <div className="ui-videos-item-name" title={name}>{name}</div>
  </div>
)

export default Video
