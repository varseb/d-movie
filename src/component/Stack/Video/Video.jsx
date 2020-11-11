import React, { useRef, useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import classnames from 'classnames'
import { connect, action } from 'redux/app'
import Progress from 'component/Video/Progress'

const VideoStack = ({
  title,
  videoKey,
  playingVideo,
  updateVideoState,
  openToast,
  closeStack
}) => {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(
    () => {
      return () => {
        updateVideoState({ playing: false })
      }
    },
    [ updateVideoState ]
  )

  const onReady = event => {
    ref.current = event.target
    ref.current.setVolume(100)
    setReady(true)
  }

  const onError = () => {
    closeStack()

    openToast({
      message: 'Video unavailable, try again later'
    })
  }

  const handleLayerClick = () => {
    if( ref.current && ready ){

      const videoState = ref.current.getPlayerState()

      if( videoState !== 1 ){
        ref.current.playVideo()
      }
    }
  }

  return (
    <>
      <YouTube
        videoId={videoKey}
        containerClassName="video-stack"
        className={classnames('video-stack-frame', { ready, playing: playingVideo })}
        onReady={onReady}
        onPlay={() => updateVideoState({ playing: true })}
        onEnd={() => closeStack()}
        onError={onError}
        opts={{
          title: `${title} - Must Watch`,
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 1,
            modestbranding: 1,
            iv_load_policy: 3,
            rel: 0,
            controls: 0
          }
        }}
      />

      <div className="video-stack-overlay" onClick={handleLayerClick}>
        {playingVideo && (
          <Progress playerRef={ref} />
        )}
      </div>
    </>
  )
}

export default connect(
  ({ layout }) => ({
    playingVideo: layout.playingVideo
  }),
  {
    updateVideoState: action.layout.updateVideoState,
    openToast: action.layout.openToast,
    closeStack: action.layout.closeStack
  },
  VideoStack
)
