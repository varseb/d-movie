import { useUpdateCheck } from 'hook'
import moment from 'moment'
import classnames from 'classnames'

const Info = ({ release_date, original_language, runtime }) => {

  const isRuntimeUpdated = useUpdateCheck(runtime)

  const info = []

  if( release_date ){
    info.push(
      <span key={release_date}>
        {moment(release_date).format('Y')}
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

  if( runtime > 0 ){
    const h = Math.floor(runtime / 60)
    const m = Math.floor(runtime % 60 % 60)

    info.push(
      <span key={runtime} className={classnames({ 'fade-in': isRuntimeUpdated })}>
        {h > 0 && `${h}h`} {m > 0 && `${m}m`}
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
