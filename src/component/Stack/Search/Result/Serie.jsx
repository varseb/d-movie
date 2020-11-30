import classnames from 'classnames'
//import moment from 'moment'
//import Poster from 'component/Movie/Poster'


const SerieResult = ({ result, isTopResult, openMovie }) => {

  //const { id, title, release_date } = result

  return (
    <div className={classnames('search-stack-grid-item movie', { 'top-result': isTopResult })}>
      <div className="search-stack-grid-item-poster">
        serie
      </div>

      {/*isTopResult && (
        <div className="search-stack-grid-item-info">
          <div className="media-type">Movie</div>
          <div className="title">{title}</div>

          {release_date && (
            <div className="release-date">
              {moment(release_date).format('Y')}
            </div>
          )}
        </div>
      )*/}
    </div>
  )
}

export default SerieResult