import classnames from 'classnames'
import Picture from 'component/Person/Picture'

const PersonResult = ({ result, isTopResult, openPerson }) => {

  const { id, name, known_for_department } = result

  return (
    <div
      onClick={() => openPerson({ personId: id })}
      className={classnames('search-stack-grid-item person', {
        'top-result': isTopResult
      })}
    >
      <div className="content ui-tapable ui-tapable-round">
        <div className="search-stack-grid-item-poster">
          <Picture person={result} size="x50" />
        </div>

        {!isTopResult && (
          <div className="person-name">
            {name}
          </div>
        )}

        {isTopResult && (
          <div className="search-stack-grid-item-info">
            <div className="media-type">Person</div>
            <div className="title">{name}</div>

            {known_for_department && (
              <div className="department">
                {known_for_department}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default PersonResult
