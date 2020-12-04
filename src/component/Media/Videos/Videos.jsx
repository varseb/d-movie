import { connect, action } from 'redux/app'
import Video from './Video'

const Videos = ({ videos, openVideo }) => (
  <div className="media-videos">
    {videos.map(({ id, name, key }) => (
      <Video
        key={id}
        name={name}
        videoKey={key}
        openVideo={openVideo}
      />
    ))}
  </div>
)

export default connect(
  null,
  {
    openVideo: action.layout.openStack('video')
  },
  Videos
)
