import React from 'react'
import { register, selector, action } from 'redux/app'
import Stack from 'component/Layout/Stack'
import Poster from 'component/Poster'
import Rating from 'component/Rating'

const SearchStack = ({
  query,
  filter,
  results,
  updateQuery,
  updateFilter,
  openMovie,
  closeStack
}) => {

  const handleRatingChange = star => {
    const rating = star * 2

    updateFilter({
      rating: rating === filter.rating ? null : rating
    })
  }

  return (
    <Stack className="search-stack" closeStack={closeStack}>
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
              onChange={handleRatingChange}
            />
          </div>
        </div>
      </div>

      {results.length > 0 && (
        <div className="search-stack-grid">
          {results.map(({ id }) => (
            <div key={id} className="search-stack-grid-item">
              <Poster id={id} size="w342" onClick={() => openMovie({ id })} />
            </div>
          ))}
        </div>
      )}
    </Stack>
  )
}

export default register(
  ({ search, movie }) => ({
    query: search.query,
    filter: search.filter,
    results: selector.movie.getResults({
      movie,
      search
    })
  }),
  {
    updateFilter: action.search.updateFilter,
    updateQuery: action.search.updateQuery,
    closeStack: action.layout.closeStack('search'),
    openMovie: action.layout.openStack('movie')
  },
  SearchStack
)
