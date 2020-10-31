import React, { useRef } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import classnames from 'classnames'

const Layer = ({
  className,
  children
}) => {
  const ref = useRef(null)

  const arrayChildren = React.Children.toArray(children)

  return (
    <TransitionGroup component={null}>
      {arrayChildren.map((child, i) => (
        <CSSTransition nodeRef={ref} key={child.key} timeout={300}>
          <div
            ref={ref}
            className={classnames('layer-wrap', className, { active: i === arrayChildren.length - 1})}
          >
            {child}
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

export default Layer
