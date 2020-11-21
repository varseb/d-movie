import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import classnames from 'classnames'

const Layer = ({ namespace, active, hidden, children, ...props }) => {
  const ref = useRef(null)

  return (
    <CSSTransition
      nodeRef={ref}
      timeout={{
        enter: 400,
        exit: 250
      }}
      {...props}
    >
      <div ref={ref} className={classnames('ui-layer', namespace, { active, hidden })}>
        {children}
      </div>
    </CSSTransition>
  )
}

export default Layer
