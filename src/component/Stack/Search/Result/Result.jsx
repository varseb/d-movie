import Movie from './Movie'
import Person from './Person'
import Serie from './Serie'

const mediaTypeLabel = {
  movie: 'Movies',
  person: 'People',
  tv: 'Series'
}

const mediaTypeResult = {
  movie: Movie,
  person: Person,
  tv: Serie
}

const SearchResult = ({
  result,
  isTopResult,
  isFirstItem,
  isSecondItem,
  prevResult,
  openMovie,
  openPerson
}) => {
  const { media_type } = result
  const Result = mediaTypeResult[media_type]

  return (
    <>
      {isTopResult && (
        <div className="search-stack-grid-head">
          Top Result
        </div>
      )}

      {!isTopResult && isFirstItem && (
        <div className="search-stack-grid-head">
          Popular movies
        </div>
      )}

      {!isTopResult && (isSecondItem || (prevResult && media_type !== prevResult.media_type)) && (
        <div className="search-stack-grid-head">
          {mediaTypeLabel[media_type]}
        </div>
      )}

      <Result
        result={result}
        isTopResult={isTopResult}
        openMovie={openMovie}
        openPerson={openPerson}
      />
    </>
  )
}

export default SearchResult
