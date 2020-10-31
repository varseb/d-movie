import React from 'react'
import Layer from 'component/Layout/Layer'
import MovieStack from 'component/Stack/Movie'
import { register } from 'redux/app'

const stackList = {
  'movie': MovieStack
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
