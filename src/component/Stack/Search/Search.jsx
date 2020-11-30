import { Fragment } from 'react'
import Movie from './Result/Movie'
import Person from './Result/Person'
import Serie from './Result/Serie'

const mediaTypeLabels = {
  movie: 'Movies',
  person: 'People',
  tv: 'Series'
}

const mediaTypeResult = {
  movie: Movie,
  person: Person,
  tv: Serie
}

const SearchStack = ({
  query,
  loading,
  results,
  inputRef,
  keyboardOpen,
  updateQuery,
  openMovie,
  openPerson
}) => (
  <div className="search-stack">
    <div className="search-stack-head">
      <div className="search-stack-input-wrapper">
        <input
          ref={inputRef}
          type="text"
          placeholder="search movies and people"
          value={query}
          onChange={event => updateQuery({
            query: event.target.value
          })}
          className="search-stack-input"
        />

        <i className="icon-search" />

        {/*
        <div className="search-stack-input-rating">
          <Rating
            voteAverage={filter.rating}
            onChange={star => handleRatingChange(star, filter, updateFilter)}
          />
        </div>
        */}
      </div>
    </div>

    {!loading && !results.length && (
      <div className="search-stack-empty fade-in">
        <p>No results</p>
      </div>
    )}

    {results.length > 0 && (
      <div className="search-stack-grid">
        {results.map((result, index) => {
          const { id, media_type } = result
          const Result = mediaTypeResult[media_type]

          const isFirstItem = index === 0
          const isTopResult = isFirstItem && query

          return (
            <Fragment key={id}>
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

              {!isTopResult && ( (index === 1 && query ) || (index > 0 && media_type !== results[index - 1].media_type) ) && (
                <div className="search-stack-grid-head">
                  {mediaTypeLabels[media_type]}
                </div>
              )}

              <Result
                result={result}
                isTopResult={isTopResult}
                openMovie={openMovie}
                openPerson={openPerson}
              />
            </Fragment>
          )}
        )}
      </div>
    )}

    {keyboardOpen && (
      <div className="ui-keyboard-fill" />
    )}
  </div>
)

export default SearchStack
