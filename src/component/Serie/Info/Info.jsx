import { useUpdateCheck } from 'hook'
import moment from 'moment'
import classnames from 'classnames'

const Info = ({
  first_air_date,
  original_language,
  number_of_seasons
}) => {

  const isAirDateUpdated = useUpdateCheck(first_air_date)
  const isSeasonsUpdated = useUpdateCheck(number_of_seasons)

  const info = []

  if( first_air_date ){
    info.push(
      <span key={first_air_date} className={classnames({ 'fade-in': isAirDateUpdated })}>
        {moment(first_air_date).format('Y')}
      </span>
    )
  }

  if( original_language ){
    info.push(
      <span key={original_language}>
        {original_language.toUpperCase()}
      </span>
    )
  }

  if( number_of_seasons > 0 ){
    info.push(
      <span key={number_of_seasons} className={classnames({ 'fade-in': isSeasonsUpdated })}>
        {number_of_seasons} Season{number_of_seasons !== 1 && 's'}
      </span>
    )
  }

  return (
    <div className="movie-info">
      {info.reduce((prev, curr) => [prev, ' / ', curr])}
    </div>
  )
}

export default Info
