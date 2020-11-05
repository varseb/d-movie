import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import classnames from 'classnames'

const Layer = ({ active, children, ...props }) => {
  const ref = useRef(null)

  return (
    <CSSTransition nodeRef={ref} timeout={400} {...props}>
      <div ref={ref} className={classnames('ui-layer', { active })}>
        {children}
      </div>
    </CSSTransition>
  )
}

export default Layer
