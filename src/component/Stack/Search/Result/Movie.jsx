import classnames from 'classnames'
import moment from 'moment'
import Poster from 'component/Media/Poster'

const MovieResult = ({ result, isTopResult, openMovie }) => {

  const { id, title, release_date } = result

  return (
    <div
      onClick={() => openMovie({ id })}
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
            <div className="media-type">Movie</div>
            <div className="title">{title}</div>

            {release_date && (
              <div className="release-date">
                {moment(release_date).format('Y')}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default MovieResult
