import Picture from 'component/Person/Picture'

const CastStack = ({ credits, title, openPerson }) => (
  <div className="cast-stack">
    <div className="ui-stack-head">
      <h2>
        {title}
      </h2>
      <div className="cast-stack-subtitle">
        Cast
      </div>
    </div>

    <div className="show-up-primary">
      <div className="cast-stack-list">
        {credits.cast.map(person => (
          <div
            key={person.credit_id}
            className="cast-stack-item ui-tapable"
            onClick={() => openPerson({ personId: person.id })}
          >
            <div className="cast-stack-item-picture">
              <Picture person={person} />
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
        ))}
      </div>
    </div>
  </div>
)

export default CastStack
