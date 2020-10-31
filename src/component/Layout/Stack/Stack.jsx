import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useLockScroll } from 'hook'

const Stack = ({ className, closeStack, children }) => {
  useLockScroll()

  useEffect(
    () => {
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
    [ closeStack ]
  )

  return (
    <div className={classnames('ui-stack', className)}>
      <div className="ui-stack-close" onClick={closeStack}>
        <i className="icon-close" />
      </div>

      {children}
    </div>
  )
}

export default Stack
