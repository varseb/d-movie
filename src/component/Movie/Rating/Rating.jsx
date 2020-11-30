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
        data-rating={voteAverage}
        className={classnames('icon-star-outline', {
          'icon-star-half': voteAverage !== null && voteAverage > star * range,
          'icon-star-rate': voteAverage !== null && voteAverage >= star * range + 1,
          'ui-clickable': onChange
        })}
      />
    ))}
  </div>
)

export default Rating
