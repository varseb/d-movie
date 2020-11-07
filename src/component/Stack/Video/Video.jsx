import React, { useRef, useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import classnames from 'classnames'
import { register, action } from 'redux/app'
import Progress from 'component/Video/Progress'


const VideoStack = ({ title, videoKey, playingVideo, updateVideoState, closeStack }) => {
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
        onReady={event => {
          ref.current = event.target
          ref.current.setVolume(100)
          setReady(true)
        }}
        onPlay={() => updateVideoState({ playing: true })}
        onEnd={() => closeStack()}
        onError={() => closeStack()}
        opts={{
          title,
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

export default register(
  ({ layout }) => ({
    playingVideo: layout.playingVideo
  }),
  {
    updateVideoState: action.layout.updateVideoState,
    closeStack: action.layout.closeStack
  },
  VideoStack
)
