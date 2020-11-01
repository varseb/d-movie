import React from 'react'
import classnames from 'classnames'

const stars = [ ...Array(5).keys() ]
const range = 2

const Rating = ({ voteAverage }) => (
  <div className="ui-rating">
    {stars.map(star => (
      <i
        key={star}
        className={classnames('icon-star-outline', {
          'icon-star-rate': voteAverage >= star * range
        })}
      />
    ))}
  </div>
)

export default Rating
