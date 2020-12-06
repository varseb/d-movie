import { useRef, useState, useEffect } from 'react'

const sensibility   = 800
const closeTarget   = .25
const dragBarHeight = 50

const useCloseGesture = (stackRef, contentRef, closeStack) => {
  const scrollRef = useRef()
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
      const stack = stackRef.current

      let startY  = null
      let clientY = null
      let closing = false
      let capture = false
      let blur    = true

      const handleTouchStart = event => {
        const { target, touches } = event

        if( target.matches('.scroll-lock-ignore') || target.closest('.scroll-lock-ignore') ){
          return
        }

        startY  = touches[0].clientY
        capture = content.scrollTop <= 0 || startY < dragBarHeight
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
          if( scrollRef.current < 0 ){
            content.style.overflow = 'hidden'
            content.style.transform = `translate3d(0, ${Math.abs(scrollRef.current)}px, 0)`
          }

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
        content.removeAttribute('style')
        scrollRef.current = 0

        if( !closing ){
          setProgress(0)
        }
      }

      if( content && stack ){
        content.addEventListener('touchstart', handleTouchStart)
        content.addEventListener('touchmove', handleTouchMove)
        content.addEventListener('touchend', handleTouchEnd)

        stack.addEventListener('touchstart', handleTouchStart)
        stack.addEventListener('touchmove', handleTouchMove)
        stack.addEventListener('touchend', handleTouchEnd)

        return () => {
          content.removeEventListener('touchstart', handleTouchStart)
          content.removeEventListener('touchmove', handleTouchMove)
          content.removeEventListener('touchend', handleTouchEnd)

          stack.removeEventListener('touchstart', handleTouchStart)
          stack.removeEventListener('touchmove', handleTouchMove)
          stack.removeEventListener('touchend', handleTouchEnd)
        }
      }
    },
    [ scrollRef, stackRef, contentRef, setProgress, closeStack ]
  )

  useEffect(
    () => {
      const content = contentRef.current

      const handleScroll = () => {
        if( content.scrollTop < 0 ){
          scrollRef.current = content.scrollTop
        }
      }

      if( content ){
        content.addEventListener('scroll', handleScroll)

        return () => {
          content.removeEventListener('scroll', handleScroll)

        }
      }
    },
    [ contentRef, setProgress ]
  )

  return progress
}

export default useCloseGesture
