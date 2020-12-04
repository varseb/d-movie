import classnames from 'classnames'
import moment from 'moment'
import Poster from 'component/Media/Poster'

const SerieResult = ({ result, isTopResult, openSerie }) => {

  const { id, name, first_air_date } = result

  return (
    <div
      onClick={() => openSerie({ id })}
      className={classnames('search-stack-grid-item', {
        'top-result': isTopResult
      })}
    >
      <div className="content ui-tapable ui-tapable-round">
        <div className="search-stack-grid-item-poster">
          <Poster media={result} size="w185"  />
        </div>

        {isTopResult && (
          <div className="search-stack-grid-item-info">
            <div className="media-type">TV Show</div>
            <div className="title">{name}</div>

            {first_air_date && (
              <div className="release-date">
                {moment(first_air_date).format('Y')}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default SerieResult
