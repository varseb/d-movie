import React from 'react'
import classnames from 'classnames'
import Header from 'component/Layout/Header'
import StackLayer from 'component/Layout/Stack/Layer'
import { register } from 'redux/app'

const Layout = ({ stackOpen, children }) => (
  <>
    <main className={classnames('layer-main', { 'stack-open': stackOpen })}>
      <div className="layer-main-header">
        <Header />
      </div>

      <div className="layer-main-content">
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
