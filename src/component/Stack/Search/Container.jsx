import { useRef, useState, useEffect } from 'react'
import { useTitle, useKeyboardSensor } from 'hook'
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
  multiSearch,
  openMovie,
  openSerie,
  openPerson
}) => {
  const [ shouldFocus ] = useState(active)
  const inputRef = useRef()
  const keyboardOpen = useKeyboardSensor()

  useTitle('Search')

  useEffect(
    () => {
      if( shouldFocus && inputRef.current ){
        inputRef.current.focus()
      }
    },
    [ inputRef, shouldFocus ]
  )

  useEffect(
    () => {
      if( query ){
        multiSearch({ query, language })
      }
    },
    [ query, language, multiSearch ]
  )

  return (
    <SearchStack
      inputRef={inputRef}
      query={query}
      loading={loading}
      results={results}
      keyboardOpen={keyboardOpen}
      updateQuery={updateQuery}
      openMovie={openMovie}
      openSerie={openSerie}
      openPerson={openPerson}
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
  ({ user, search, movie, serie, person }) => ({
    language: user.language,
    query: search.query,
    //filter: search.filter,
    loading: search.loading[search.query],
    results: selector.search.getResults({ movie, serie, person, search })
  }),
  {
    //updateFilter: action.search.updateFilter,
    updateQuery: action.search.updateQuery,
    multiSearch: action.search.multiSearch,
    openMovie: action.layout.openStack('movie'),
    openSerie: action.layout.openStack('serie'),
    openPerson: action.layout.openStack('person')
  },
  SearchStackContainer
)
