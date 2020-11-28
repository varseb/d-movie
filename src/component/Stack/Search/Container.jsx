import { useEffect } from 'react'
import { useTitle } from 'hook'
import { connect, selector, action } from 'redux/app'
import SearchStack from './Search'

const SearchStackContainer = ({
  active,
  language,
  query,
  //filter,
  loading,
  results,
  updateQuery,
  //updateFilter,
  searchMovies,
  openMovie
}) => {
  useTitle('Search')

  useEffect(
    () => {
      if( query ){
        searchMovies({ query, language })
      }
    },
    [ query, language, searchMovies ]
  )

  return (
    <SearchStack
      active={active}
      query={query}
      loading={loading}
      results={results}
      updateQuery={updateQuery}
      openMovie={openMovie}
    />
  )
}

/*
const handleRatingChange = (star, filter, updateFilter) => {
  const rating = (star+1) * 2

  updateFilter({
    rating: rating === filter.rating ? null : rating
  })
}
*/

export default connect(
  ({ user, search, movie }) => ({
    language: user.language,
    query: search.query,
    //filter: search.filter,
    loading: search.loading[search.query],
    results: selector.movie.getResults({ movie, search })
  }),
  {
    //updateFilter: action.search.updateFilter,
    updateQuery: action.search.updateQuery,
    searchMovies: action.search.searchMovies,
    openMovie: action.layout.openStack('movie')
  },
  SearchStackContainer
)
