import React from 'react'
import { register } from 'redux/app'
import Layer from 'component/Layout/Layer'
import MovieStack from 'component/Stack/Movie'
import SearchStack from 'component/Stack/Search'


const stackList = {
  'movie': MovieStack,
  'search': SearchStack
}


const StackLayer = ({ stack, closeStack }) => (
  <Layer className="ui-stack-layer">
    {stack.map(({ namespace, props }) => {

      const Stack = stackList[namespace]

      if( !Stack ){
        return null
      }

      return (
        <Stack
          key={namespace}
          {...props}
        />
       )
    })}
  </Layer>
)


export default register(
  ({ layout }) => ({
    stack: layout.stack
  }),
  null,
  StackLayer
)
