import React from 'react'
//import classnames from 'classnames'
import { connect, action } from 'redux/app'


const CastStack = ({ config, credits, title, openPerson }) => (
  <div className="cast-stack">

    <div className="ui-stack-head">
      <h2 className="cast-stack-title">
        {title}
      </h2>
      <div className="cast-stack-subtitle">Cast</div>
    </div>

    <div className="show-up-primary">
      <div className="cast-stack-list">
        {credits.cast.map(person => {

          const avatarUrl = [config.secure_base_url, 'w185', person.profile_path].join('')

          return (
            <div
              key={person.id}
              className="cast-stack-item ui-tapable"
              onClick={() => openPerson({ personId: person.id })}
            >
              <div className="cast-stack-item-avatar">
                {person.profile_path && (
                  <img src={avatarUrl} alt="" />
                )}
              </div>

              <div className="cast-stack-item-info">
                <div className="cast-stack-item-name">
                  {person.name}
                </div>

                {person.character && (
                  <div className="cast-stack-item-character">
                    {person.character}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default connect(
  ({ config, movie }, { id }) => ({
    title: movie.movies[id].title,
    credits: movie.credits[id],
    config: config.images
  }),
  {
    openPerson: action.layout.openStack('person')
  },
  CastStack
)
