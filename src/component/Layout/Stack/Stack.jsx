import React, { useEffect, useRef } from 'react'
import { useScrollLock } from 'hook'

const Stack = ({ active, closeStack, children }) => {
  const ref = useRef(null)

  useScrollLock(ref)

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
    <div ref={ref} className="ui-stack">
      <div className="ui-stack-close ui-clickable" onClick={closeStack}>
        <i className="icon-close" />
      </div>

      {children}
    </div>
  )
}

export default Stack
