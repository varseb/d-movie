import { useState, useEffect } from 'react'

const sensibility = 800
const closeTarget = .25

const useCloseGesture = (ref, closeStack) => {
  const [progress, setProgress] = useState(0)

  useEffect(
    () => {
      const node  = ref.current

      let clientY = null
      let closing = false
      let capture = false
      let blur    = true

      const handleTouchStart = () => {
        capture = node.scrollTop === 0
        blur    = true
      }

      const handleTouchMove = ({ touches }) => {
        if( !capture || closing ){
          return
        }

        if( node.scrollTop !== 0 ){
          capture = false
          return
        }

        if( clientY === null ){
          clientY = touches[0].clientY
        }

        const diff = clientY - touches[0].clientY

        if( diff < 0 ){
          if( blur && document.activeElement ){
            document.activeElement.blur()
            blur = false
          }

          const percent = Math.abs(diff) / sensibility

          setProgress(percent)

          if( percent > closeTarget && !closing ){
            closeStack()
            closing = true
          }
        }
      }

      const handleTouchEnd = () => {
        clientY = null
        capture = false

        if( !closing ){
          setProgress(0)
        }
      }

      if( node ){
        node.addEventListener('touchstart', handleTouchStart)
        node.addEventListener('touchmove', handleTouchMove)
        node.addEventListener('touchend', handleTouchEnd)

        return () => {
          node.removeEventListener('touchstart', handleTouchStart)
          node.removeEventListener('touchmove', handleTouchMove)
          node.removeEventListener('touchend', handleTouchEnd)
        }
      }
    },
    [ ref, setProgress, closeStack ]
  )

  return progress
}

export default useCloseGesture
