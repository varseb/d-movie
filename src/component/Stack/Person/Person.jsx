import classnames from 'classnames'
import moment from 'moment'
import Picture from 'component/Person/Picture'
import TextClamp from 'component/Layout/TextClamp'
import Poster from 'component/Movie/Poster'

const PersonStack = ({
  person,
  knownFor,
  openMovie,
  isBioUpdated
}) => (
  <div className="person-stack">
    <div className="ui-stack-head">
      <h1 className="person-stack-name">
        {person.name}
      </h1>
    </div>

    <div className="show-up-primary">
      <div className="person-stack-picture">
        <Picture person={person} size="x185" placeholder="x50" />
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

    <div className="show-up-tertiary">
      {(person.birthday || person.place_of_birth || person.biography) && knownFor.length > 0 && (
        <div className="person-stack-known-for">
          <div>Known For</div>
          <div className="person-stack-movies scroll-lock-ignore" dir="ltr">
            <div className="person-stack-movies-scroll">
              {knownFor.map(movie => (
                <div className="person-stack-movies-movie" key={movie.id}>
                  <Poster id={movie.id} onClick={() => openMovie({ id: movie.id })} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
)

export default  PersonStack

