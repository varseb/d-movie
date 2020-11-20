import { useState, useEffect } from 'react'

const sensibility   = 800
const closeTarget   = .25
const dragBarHeight = 35

const useCloseGesture = (stackRef, contentRef, closeStack) => {
  const [progress, setProgress] = useState(0)

  useEffect(
    () => {
      setProgress(0)
    },
    [ setProgress ]
  )

  useEffect(
    () => {
      const content = contentRef.current

      let startY  = null
      let clientY = null
      let closing = false
      let capture = false
      let blur    = true

      const handleTouchStart = ({ touches }) => {
        startY  = touches[0].clientY
        capture = content.scrollTop === 0 || startY < dragBarHeight
        blur    = true
      }

      const handleTouchMove = ({ touches }) => {
        if( !capture || closing ){
          return
        }

        if( clientY === null ){
          clientY = touches[0].clientY
        }

        if( clientY < startY ){
          capture = false
          return
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

      const stack = stackRef.current

      if( stack ){
        stack.addEventListener('touchstart', handleTouchStart)
        stack.addEventListener('touchmove', handleTouchMove)
        stack.addEventListener('touchend', handleTouchEnd)

        return () => {
          stack.removeEventListener('touchstart', handleTouchStart)
          stack.removeEventListener('touchmove', handleTouchMove)
          stack.removeEventListener('touchend', handleTouchEnd)
        }
      }
    },
    [ stackRef, contentRef, setProgress, closeStack ]
  )

  return progress
}

export default useCloseGesture
