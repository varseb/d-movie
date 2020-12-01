import Result from './Result'

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
        {results.map((result, index) => (
          <Result
            key={result.id}
            result={result}
            isTopResult={index === 0 && query}
            isFirstItem={index === 0}
            isSecondItem={index === 1 && query}
            prevResult={index > 0 && results[index - 1]}
            openMovie={openMovie}
            openPerson={openPerson}
          />
        ))}
      </div>
    )}

    {keyboardOpen && (
      <div className="ui-keyboard-fill" />
    )}
  </div>
)

export default SearchStack
