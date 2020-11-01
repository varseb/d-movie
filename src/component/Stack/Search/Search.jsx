import React, { useState, useEffect } from 'react'
import { register, selector, action } from 'redux/app'
import Stack from 'component/Layout/Stack'
import Poster from 'component/Poster'

const SearchStack = ({ query, movies, results, searchMovies, openMovie, closeStack }) => {

  const [searchResults, setSearchResults] = useState(movies)

  useEffect(
    () => {
      if( results.length ){
        setSearchResults(results)
      }
    },
    [results, setSearchResults]
  )

  useEffect(
    () => {
      if( !query ){
        setSearchResults(movies)
      }
    },
    [query, movies, setSearchResults]
  )

  return (
    <Stack className="search-stack" closeStack={closeStack}>
      <div className="search-stack-head">
        <div className="search-stack-input-wrapper">
          <input
            autoFocus
            type="text"
            placeholder="search movies"
            value={query}
            onChange={event => searchMovies({ query: event.target.value })}
            className="search-stack-input"
          />
          <i className="icon-search" />
        </div>
      </div>

      {searchResults.length > 0 && (
        <div className="search-stack-grid">
          {searchResults.map(({ id }) => (
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
    movies: selector.movie.getMovies({
      movie
    }),
    results: selector.movie.getSearchResults({
      movie,
      search
    })
  }),
  {
    searchMovies: action.search.searchMovies,
    closeStack: action.layout.closeStack('search'),
    openMovie: action.layout.openStack('movie')
  },
  SearchStack
)
