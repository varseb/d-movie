import React from 'react'
import classnames from 'classnames'
import Header from 'component/Layout/Header'
import StackLayer from 'component/Layout/Stack/Layer'
import { register } from 'redux/app'

const Layout = ({ stackOpen, children }) => (
  <>
    <main className={classnames('ui-main', { 'stack-open': stackOpen })}>
      <div className="ui-main-header">
        <Header />
      </div>

      <div className="ui-main-content">
        {children}
      </div>
    </main>

    <StackLayer />
  </>
)

export default register(
  ({ layout }) => ({
    stackOpen: layout.stack.length > 0
  }),
  null,
  Layout
)
