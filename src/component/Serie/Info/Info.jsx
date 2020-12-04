import { useUpdateCheck } from 'hook'
import moment from 'moment'
import classnames from 'classnames'

const Info = ({
  first_air_date,
  last_air_date,
  original_language,
  number_of_seasons,
  status
}) => {

  const isDatesUpdated = useUpdateCheck(last_air_date + last_air_date)
  const isSeasonsUpdated = useUpdateCheck(number_of_seasons)
  const isStatusUpdated = useUpdateCheck(status)

  const info = []

  if( first_air_date || last_air_date ){
    const first = moment(first_air_date).format('Y')
    const last = last_air_date && moment(last_air_date).format('Y')
    const str = `${first}${last && last !== first ? ` - ${last}` : ``}`

    info.push(
      <span key={str} className={classnames({ 'fade-in': isDatesUpdated })}>
        {str}
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

  if( status ){
    info.push(
      <span key={status} className={classnames({ 'fade-in': isStatusUpdated })}>
        {status}
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
