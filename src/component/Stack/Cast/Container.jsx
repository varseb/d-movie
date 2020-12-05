import { connect, selector, action } from 'redux/app'
import CastStack from './Cast'

const CastStackContainer = ({ cast, title, openPerson }) => (
  <CastStack
    cast={cast}
    title={title}
    openPerson={openPerson}
  />
)

const selectCast = {
  movie: selector.credit.getMovieCast,
  serie: selector.credit.getSerieCast
}

export default connect(
  ({ movie, serie, credit, person }, { id, media }) => ({
    cast: selectCast[media]({ credit, person, id }),
    title: media === 'movie' ? movie.movies[id].title : serie.series[id].name
  }),
  {
    openPerson: action.layout.openStack('person')
  },
  CastStackContainer
)
