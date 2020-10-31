import { useEffect } from 'react'

const useLockScroll = () => {
  useEffect(
    () => {
      document.body.style.overflow = 'hidden'

      return () => document.body.removeAttribute('style')
    }
  )
}

export default useLockScroll
