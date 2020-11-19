import React, { useRef } from 'react'
import { useScrollLock, useCloseKey, useCloseGesture } from 'hook'
import classnames from 'classnames'

const Stack = ({ active, closeStack, children }) => {
  const ref = useRef(null)

  useScrollLock(ref)

  useCloseKey(active, closeStack)

  const progress = useCloseGesture(ref, closeStack)

  return (
    <div
      className={classnames('ui-stack-wrap', { closing: progress !== 0 })}
      style={{transform: `scale(${1 - progress})`}}
    >
      <div className="ui-stack">
        <div className="ui-stack-close ui-clickable" onClick={closeStack}>
          <i className="icon-close" />
        </div>

        <div ref={ref} className="ui-stack-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Stack
