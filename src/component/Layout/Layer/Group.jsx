import { TransitionGroup } from 'react-transition-group'

const LayerGroup = ({ children }) => (
  <TransitionGroup component={null}>
    {children}
  </TransitionGroup>
)

export default LayerGroup
