import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import classnames from 'classnames'

const timeout = {
  enter: 400,
  exit: 300
}

const Layer = ({ namespace, active, children, ...props }) => {
  const ref = useRef(null)

  return (
    <CSSTransition nodeRef={ref} timeout={timeout} {...props}>
      <section ref={ref} className={classnames('ui-layer', namespace, { active })}>
        {children}
      </section>
    </CSSTransition>
  )
}

export default Layer
