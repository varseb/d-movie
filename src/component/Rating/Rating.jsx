import React from 'react'
import classnames from 'classnames'

const stars = [ ...Array(5).keys() ]
const range = 2

const Rating = ({ voteAverage, onChange }) => (
  <div className="ui-rating">
    {stars.map(star => (
      <i
        key={star}
        onClick={() => {
          onChange && onChange(star)
        }}
        className={classnames('icon-star-outline', {
          'icon-star-rate': voteAverage !== null && voteAverage >= star * range
        })}
      />
    ))}
  </div>
)

export default Rating
