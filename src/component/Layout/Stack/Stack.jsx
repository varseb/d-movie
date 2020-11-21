import React, { useRef } from 'react'
import { useScrollLock, useCloseKey, useCloseGesture } from 'hook'
import classnames from 'classnames'
import Indicator from './Indicator'

const Stack = ({ active, loading, closeStack, children }) => {
  const stackRef   = useRef(null)
  const contentRef = useRef(null)

  useScrollLock(contentRef)

  useCloseKey(active, closeStack)

  const progress = useCloseGesture(stackRef, contentRef, closeStack)

  return (
    <div
      className={classnames('ui-stack-wrap', { closing: progress !== 0 })}
      style={{transform: `scale(${1 - progress}) translate3d(0,0,0)`}}
    >
      <div ref={stackRef} className="ui-stack">

        <Indicator loading={loading} />

        <div className="ui-stack-close ui-clickable" onClick={closeStack}>
          <i className="icon-close" />
        </div>

        <div ref={contentRef} className="ui-stack-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Stack
