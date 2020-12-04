import Image from 'component/Layout/Image'

const Video = ({ name, videoKey, openVideo }) => (
  <div
    className="media-videos-item-wrap"
    onClick={() => openVideo({
      title: name,
      videoKey
    })}
  >
    <div className="media-videos-item">
      <div className="media-videos-item-thumb">
        <Image src={`https://img.youtube.com/vi/${videoKey}/hqdefault.jpg`} />
      </div>
    </div>

    <div className="media-videos-item-name" title={name}>
      {name}
    </div>
  </div>
)

export default Video
