import React from 'react'
import classnames from 'classnames'

const Lang = ({ language, size }) => (
  <div className={classnames('ui-lang', size)}>
    {language}
  </div>
)

export default Lang
