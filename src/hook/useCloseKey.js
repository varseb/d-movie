import { useEffect } from 'react'

const useCloseKey = (active, closeStack) => {
  useEffect(
    () => {
      if( !active ){
        return
      }

      const closeEvent = event => {
        if( event.keyCode === 27 ){
          closeStack()
        }
      }

      document.addEventListener('keydown', closeEvent)

      return () => {
        document.removeEventListener('keydown', closeEvent)
      }
    },
    [ active, closeStack ]
  )
}

export default useCloseKey
