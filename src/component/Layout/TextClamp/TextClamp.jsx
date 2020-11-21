import React, { useState } from 'react'
import classnames from 'classnames'

const TextClamp = ({
  lineClamp = 'x3',
  className,
  children
}) => {

  const [showAll, setShowAll] = useState(false)

  return (
    <p
      onClick={() => setShowAll(true)}
      className={classnames('ui-text-clamp', lineClamp, className, {
        'show-all': showAll
      })}
    >
      {children}
    </p>
  )

}

export default TextClamp
