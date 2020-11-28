import { connect, action } from 'redux/app'
import CastStack from './Cast'

const CastStackContainer = ({ credits, title, openPerson }) => (
  <CastStack
    credits={credits}
    title={title}
    openPerson={openPerson}
  />
)

export default connect(
  ({ movie }, { id }) => ({
    title: movie.movies[id].title,
    credits: movie.credits[id]
  }),
  {
    openPerson: action.layout.openStack('person')
  },
  CastStackContainer
)
