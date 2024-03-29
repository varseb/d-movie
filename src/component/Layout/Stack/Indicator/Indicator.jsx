import { useState, useEffect } from 'react'
import classnames from 'classnames'

const StackIndicator = ({ stackRef, loading }) => {
  const [cycle, setCycle] = useState(0)

  useEffect(
    () => {
      if( loading ){
        const timeout = setTimeout(
          () => setCycle(cycle + 1),
          1000
        )

        return () => clearTimeout(timeout)
      }
    },
    [ loading, cycle, setCycle ]
  )

  return (
    <div ref={stackRef} className={classnames('ui-stack-indicator', { loading, loop: cycle % 2 })} />
  )
}

export default StackIndicator
