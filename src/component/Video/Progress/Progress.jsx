import { useState, useEffect } from 'react'

const Progress = ({ playerRef }) => {
  const [progress, setProgress] = useState(0)

  useEffect(
    () => {
      const player = playerRef.current

      if( player ){
        const duration = player.getDuration() || 1

        const interval = setInterval(
          () => {
            setProgress(
              player.getCurrentTime() / duration * 100
            )
          },
          500
        )

        return () => clearInterval(interval)
      }
    },
    [ playerRef, setProgress ]
  )

  return (
    <div className="video-progress">
      <div
        className="video-progress-fill"
        style={{
          transform: `translate3d(-${100 - progress}%, 0, 0)`
        }}
      />
    </div>
  )
}

export default Progress
