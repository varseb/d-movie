import React, { useEffect } from 'react'
import { useLockScroll } from 'hook'

const Stack = ({ active, closeStack, children }) => {
  useLockScroll()

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

  return (
    <div className="ui-stack">
      <div className="ui-stack-close" onClick={closeStack}>
        <i className="icon-close" />
      </div>

      {children}
    </div>
  )
}

export default Stack
