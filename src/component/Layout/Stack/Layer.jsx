import { connect, selector, action } from 'redux/app'
import Layer from 'component/Layout/Layer'
import LayerGroup from 'component/Layout/Layer/Group'
import Stack from 'component/Layout/Stack'
import LanguageStack from 'component/Stack/Language'
import SearchStack from 'component/Stack/Search'
import MovieStack from 'component/Stack/Movie'
import SerieStack from 'component/Stack/Serie'
import VideoStack from 'component/Stack/Video'
import CastStack from 'component/Stack/Cast'
import PersonStack from 'component/Stack/Person'

const stackList = {
  language: LanguageStack,
  search: SearchStack,
  movie: MovieStack,
  serie: SerieStack,
  video: VideoStack,
  cast: CastStack,
  person: PersonStack
}

const StackLayer = ({ stack, closeStack, loading }) => (
  <LayerGroup>
    {stack.map(({ namespace, props }, index) => {
      const active = stack.length === index + 1
      const hidden = stack.length > index + 3
      const Content = stackList[namespace]

      if( hidden ){
        return null
      }

      if( namespace === 'search' ){
        props.active = active
      }

      return (
        <Layer key={`${namespace}-${index}`} namespace={namespace} active={active}>
          <Stack active={active} loading={active && loading} closeStack={closeStack}>
            <Content {...props} />
          </Stack>
        </Layer>
      )
    })}
  </LayerGroup>
)

export default connect(
  ({ layout, status }) => ({
    stack: layout.stack,
    loading: selector.status.isLoading({ status })
  }),
  {
    closeStack: action.layout.closeStack
  },
  StackLayer
)
