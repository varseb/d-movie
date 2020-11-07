import React from 'react'
import { register, selector, action } from 'redux/app'
import Poster from 'component/Movie/Poster'
import Rating from 'component/Movie/Rating'

const SearchStack = ({
  query,
  filter,
  loading,
  results,
  updateQuery,
  updateFilter,
  openMovie
}) => (
  <>
    <div className="search-stack-head">
      <div className="search-stack-input-wrapper">
        <input
          autoFocus
          type="text"
          placeholder="search movies"
          value={query}
          onChange={event => updateQuery({ query: event.target.value })}
          className="search-stack-input"
        />

        <i className="icon-search" />

        <div className="search-stack-input-rating">
          <Rating
            voteAverage={filter.rating}
            onChange={star => handleRatingChange(star, filter, updateFilter)}
          />
        </div>
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

const handleRatingChange = (star, filter, updateFilter) => {
  const rating = star * 2

  updateFilter({
    rating: rating === filter.rating ? null : rating
  })
}

export default register(
  ({ search, movie }) => ({
    query: search.query,
    filter: search.filter,
    loading: search.loading[search.query],
    results: selector.movie.getResults({ movie, search })
  }),
  {
    updateFilter: action.search.updateFilter,
    updateQuery: action.search.updateQuery,
    openMovie: action.layout.openStack('movie')
  },
  SearchStack
)
