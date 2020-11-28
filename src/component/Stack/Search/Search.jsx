import Poster from 'component/Movie/Poster'
//import Rating from 'component/Movie/Rating'

const SearchStack = ({
  active,
  query,
  loading,
  results,
  updateQuery,
  openMovie
}) => (
  <>
    <div className="search-stack-head">
      <div className="search-stack-input-wrapper">
        <input
          autoFocus={active}
          type="text"
          placeholder="search movies"
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
        <p>No movies found</p>
      </div>
    )}

    {results.length > 0 && (
      <div className="search-stack-grid">
        {results.map(({ id }) => (
          <div key={id} className="search-stack-grid-item">
            <Poster id={id} size="w342" onClick={() => openMovie({ id })} />
          </div>
        ))}
      </div>
    )}
  </>
)

export default SearchStack
