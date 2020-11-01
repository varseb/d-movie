import React from 'react'
import classnames from 'classnames'
import { useLockScroll } from 'hook'

const Stack = ({ className, closeStack, children }) => {
  useLockScroll()

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
