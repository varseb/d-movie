
/*import randomcolor from 'randomcolor'

export const getColor = (value, alpha = 1) => {
  if( !value ){
    return undefined
  }

  return randomcolor({
    seed: value,
    luminosity: 'light',
    format: 'rgba',
    alpha
  })
}
*/

const Genres = ({ genres }) => (
  <div className="media-genres">
    {genres.map(({ name }) => name).reduce((prev, curr) => [prev, ', ', curr])}
  </div>
)

export default Genres
