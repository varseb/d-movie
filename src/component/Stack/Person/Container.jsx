import { useEffect } from 'react'
import { useUpdateCheck } from 'hook'
import { connect, selector, action } from 'redux/app'
import PersonStack from './Person'

const PersonStackContainer = ({
  personId,
  language,
  person,
  knownFor,
  getPerson,
  getMovieCredits,
  openMovie
}) => {
  useEffect(
    () => {
      getPerson({ personId, language })
    },
    [ personId, language, getPerson ]
  )

  useEffect(
    () => {
      getMovieCredits({ personId, language })
    },
    [ personId, language, getMovieCredits ]
  )

  const isBioUpdated = useUpdateCheck(person.biography)

  return (
    <PersonStack
      person={person}
      knownFor={knownFor}
      openMovie={openMovie}
      isBioUpdated={isBioUpdated}
    />
  )
}

export default connect(
  ({ user, movie, person }, { personId }) => ({
    person: person.persons[personId],
    language: user.language,
    knownFor: selector.person.getKnownFor({ movie, person, personId })
  }),
  {
    getPerson: action.person.getPerson,
    getMovieCredits: action.person.getMovieCredits,
    openMovie: action.layout.openStack('movie')
  },
  PersonStackContainer
)
