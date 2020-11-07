import React from 'react'
import { register, action } from 'redux/app'
import Layer from 'component/Layout/Layer'
import LayerGroup from 'component/Layout/Layer/Group'
import Stack from 'component/Layout/Stack'
import MovieStack from 'component/Stack/Movie'
import SearchStack from 'component/Stack/Search'
import VideoStack from 'component/Stack/Video'

const stackList = {
  'movie': MovieStack,
  'search': SearchStack,
  'video': VideoStack
}

const StackLayer = ({ stack, closeStack }) => (
  <LayerGroup>
    {stack.map(({ namespace, props }, index) => {
      const active = stack.length === index + 1
      const Content = stackList[namespace]

      if( !Content ){
        return null
      }

      return (
        <Layer key={namespace} namespace={namespace} active={active}>
          <Stack active={active} closeStack={closeStack}>
            <Content {...props} />
          </Stack>
        </Layer>
      )
    })}
  </LayerGroup>
)

export default register(
  ({ layout }) => ({
    stack: layout.stack
  }),
  {
    closeStack: action.layout.closeStack
  },
  StackLayer
)
