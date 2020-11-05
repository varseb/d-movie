import React from 'react'
import { register, action } from 'redux/app'

const Header = ({ openSearch }) => (
  <div className="ui-header">
    <div className="ui-header-title">
      <i className="icon-logo" />
      <h1>MUST WATCH</h1>
    </div>

    <div className="ui-header-search" onClick={() => openSearch()}>
      <i className="icon-search" />
    </div>
  </div>
)

export default register(
  null,
  {
    openSearch: action.layout.openStack('search')
  },
  Header
)
