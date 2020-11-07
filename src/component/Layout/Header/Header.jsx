import React from 'react'
import { connect, action } from 'redux/app'
import Lang from 'component/Layout/Lang'

const Header = ({ language, openLanguage, openSearch }) => (
  <div className="ui-header">
    <div className="ui-header-title">
      <i className="icon-logo" />
      <h1>MUST WATCH</h1>
    </div>

    <div className="ui-header-nav">
      <div className="ui-header-language ui-clickable" onClick={() => openLanguage()}>
        <Lang language={language} />
      </div>

      <div className="ui-header-search ui-clickable" onClick={() => openSearch()}>
        <i className="icon-search" />
      </div>
    </div>
  </div>
)

export default connect(
  ({ user }) => ({
    language: user.language
  }),
  {
    openLanguage: action.layout.openStack('language'),
    openSearch: action.layout.openStack('search')
  },
  Header
)
