import React from 'react'
import { register, action } from 'redux/app'

const Videos = ({ videos, openVideo }) => (
  <div className="ui-videos">
    {videos.map(({ id, name, key }) => (
      <div
        key={id}
        className="ui-videos-item-wrap"
        onClick={() => openVideo({
          title: name,
          videoKey: key
        })}
      >
        <div className="ui-videos-item">
          <div className="ui-videos-item-thumb">
            <img src={`https://img.youtube.com/vi/${key}/hqdefault.jpg`} alt="" />
          </div>
        </div>

        <div className="ui-videos-item-name">{name}</div>
      </div>
    ))}
  </div>
)

export default register(
  null,
  {
    openVideo: action.layout.openStack('video')
  },
  Videos
)
