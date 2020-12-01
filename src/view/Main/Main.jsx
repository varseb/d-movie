import { useLayoutEffect, useRef, useState, useEffect, useMemo } from 'react'
import { connect, selector, action } from 'redux/app'
import Poster from 'component/Movie/Poster'

const Main = ({
  movies,
  language,
  getConfiguration,
  getGenres,
  discoverMovies,
  openMovie
}) => {
  const ref = useRef(null)
  const [page, setPage] = useState(1)
  const [visiblePage, setVisiblePage] = useState(0)

  useEffect(
    () => {
      getConfiguration()
    },
    [ getConfiguration ]
  )

  useEffect(
    () => {
      getGenres({ language })
    },
    [ language, getGenres ]
  )

  useEffect(
    () => {
      discoverMovies({ page, language })
    },
    [ page, language, discoverMovies ]
  )

  useEffect(
    () => {
      const visibilityEvent = () => {
        if( !document.hidden ){
          discoverMovies({ page, language })
        }
      }

      document.addEventListener('visibilitychange', visibilityEvent)

      return () => {
        document.removeEventListener('visibilitychange', visibilityEvent)
      }
    },
    [ page, language, discoverMovies ]
  )

  const length = useMemo(() => movies.length, [ movies ])
  const resultsPerPage = 20
  const itemSeparation = window.innerWidth > 768 ? 40 : 20

  useEffect(
    () => {
      const offsetRight = Math.max(length - ((visiblePage || 1) * resultsPerPage + (resultsPerPage * 2)), 0)
      const totalItems = length - offsetRight
      const totalPages = totalItems / resultsPerPage

      const node = ref.current
      let callNextPage = visiblePage + 1 === page

      const scrollEvent = ({ target }) => {
        const percent = (target.scrollLeft + window.innerWidth) / (target.scrollWidth || 1)
        const relativePercent = percent * totalPages - visiblePage
        //console.log('percent', percent, relativePercent, totalPages)

        if( target.scrollLeft === 0 ){
          setPage(1)
        }

        if( relativePercent >= .6 && callNextPage){
          setPage(page + 1)
          callNextPage = false
        }
      }

      if( node ){
        node.addEventListener('scroll', scrollEvent)

        return () => {
          node.removeEventListener('scroll', scrollEvent)
        }
      }
    },
    [ visiblePage, page, setPage, ref, length ]
  )

  useLayoutEffect(
    () => {
      const node = ref.current
      const offsetRight = Math.max(length - ((visiblePage || 1) * resultsPerPage + (resultsPerPage * 2)), 0)
      const totalItems = length - offsetRight

      const scrollEvent = ({ target }) => {
        const percent = (target.scrollLeft + window.innerWidth) / (target.scrollWidth || 1)

        const currentVisible = Math.floor(percent * totalItems / resultsPerPage)

        if( currentVisible !== visiblePage ){
          setVisiblePage(currentVisible)
          //console.log('> visible', currentVisible)
        }
      }

      if( node ){
        node.addEventListener('scroll', scrollEvent)

        return () => {
          node.removeEventListener('scroll', scrollEvent)
        }
      }
    },
    [ visiblePage, setVisiblePage, length, ref ]
  )

  const offsetLeft = Math.max((visiblePage - 1) * resultsPerPage, 0)
  const min = offsetLeft
  const max = Math.min(offsetLeft + (resultsPerPage * 3), length)

  const range = Array.from({ length: max - min }, (v,k) => k + min)

  const gridWidth = window.innerWidth - itemSeparation

  const itemWidth = (window.innerWidth > 768 ? (gridWidth + itemSeparation) * .3 : (gridWidth + itemSeparation) * .85)


  return (
    <div ref={ref} className="main">
      <div className="movie-grid" style={{
        width: (offsetLeft + range.length) * itemWidth
      }}>
        <div style={{
          minWidth: offsetLeft * itemWidth,
          minHeight: 1
        }} />

        {range.map((index, nodeIndex) => {
          const movie = movies[index]

          if( !movie ){
            return null
          }

          const { id } = movie

          const shouldRender = index + 4 >= visiblePage * resultsPerPage
                &&
                index - 4 < visiblePage * resultsPerPage + resultsPerPage

          return (
            <div key={nodeIndex} className="movie-grid-item" data-index={index + 1}>
              {shouldRender && (
                <Poster id={id} onClick={() => openMovie({ id })} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default connect(
  ({ user, movie }) => ({
    language: user.language,
    movies: selector.movie.getMovies({ movie })
  }),
  {
    getConfiguration: action.config.getConfiguration,
    getGenres: action.genre.getGenres,
    discoverMovies: action.movie.discoverMovies,
    openMovie: action.layout.openStack('movie')
  },
  Main
)
