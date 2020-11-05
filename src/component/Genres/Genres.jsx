import React from 'react'

const Genres = ({ genres }) => (
  <ul className="ui-genres">
    {genres.map(({ id, name }) => (
      <li key={id}>
        {name}
      </li>
    ))}
  </ul>
)

export default Genres
