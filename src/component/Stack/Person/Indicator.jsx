import React from 'react'
import { connect } from 'redux/app'
import classnames from 'classnames'


const PersonStackIndicator = ({ loading }) => (
  <div className={classnames('ui-stack-indicator', { loading })} />
)


export default connect(
  ({ status }) => ({
    loading: status.loading['person/GET_PERSON']
  }),
  null,
  PersonStackIndicator
)
