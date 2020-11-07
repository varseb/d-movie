import { useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const useScrollLock = ref => {
  useEffect(
    () => {
      const targetElement = ref.current

      if( targetElement ){
        disableBodyScroll(targetElement, {
          allowTouchMove: node => node.matches('.scroll-lock-ignore') || node.closest('.scroll-lock-ignore')
        })

        return () => {
          enableBodyScroll(targetElement)
        }
      }
    },
    [ ref ]
  )
}

export default useScrollLock
