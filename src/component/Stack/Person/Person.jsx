import React, { useEffect } from 'react'
import classnames from 'classnames'
import moment from 'moment'
import { useUpdateCheck } from 'hook'
import { connect, action } from 'redux/app'
import TextClamp from 'component/Layout/TextClamp'

const PersonStack = ({ config, personId, language, person, getPerson }) => {

  useEffect(
    () => {
      getPerson({ personId, language })
    },
    [ personId, language, getPerson ]
  )

  const pictureUrl = [config.secure_base_url, 'h632', person.profile_path].join('')

  const isBioUpdated = useUpdateCheck(person.biography)

  return (
    <div className="person-stack">
      <h1 className="person-stack-name">
        {person.name}
      </h1>

      <div className="show-up-primary">
        <div className="person-stack-picture">
          {person.profile_path && (
            <img src={pictureUrl} alt="" />
          )}
        </div>
      </div>

      <div className="show-up-secondary">
        <dl className={classnames({ 'fade-in': isBioUpdated })}>
          {(person.birthday || person.place_of_birth) && (
            <>
              <dt>Born</dt>
              <dd>
                {person.birthday && (
                  <div>
                    {moment(person.birthday).format('MMMM D, YYYY')}
                    {' '}
                    {!person.deathday && `(age ${moment().diff(person.birthday, 'years')})`}
                  </div>
                )}

                {person.place_of_birth && (
                  <div>
                    {person.place_of_birth}
                  </div>
                )}
              </dd>
            </>
          )}

          {person.deathday && (
            <>
              <dt>Died</dt>
              <dd>{moment(person.deathday).format('MMMM D, YYYY')} (aged {moment(person.deathday).diff(person.birthday, 'years')})</dd>
            </>
          )}

          {person.biography && (
            <dd className="person-stack-bio">
              <TextClamp>
                {person.biography}
              </TextClamp>
            </dd>
          )}
        </dl>
      </div>
    </div>
  )
}

export default connect(
  ({ config, user, person }, { personId }) => ({
    person: person.persons[personId],
    config: config.images,
    language: user.language
  }),
  {
    getPerson: action.person.getPerson
  },
  PersonStack
)
