import React from 'react'
import classnames from 'classnames'
import { connect, action } from 'redux/app'
import Lang from 'component/Layout/Lang'

const languages = [ 'en', 'es', 'pt' ]
const names = {
  'en': 'English',
  'es': 'Español',
  'pt': 'Português'
}

const LanguageStack = ({ language, changeLanguage, closeStack }) => (
  <div className="language-stack">
    <ul>
      {languages.map(lang => (
        <li
          key={lang}
          className="ui-clickable"
          onClick={() => {
            changeLanguage({ language: lang })
            closeStack()
          }}
        >
          <div className="language-stack-lang">
            <Lang language={lang} size="x38" />
          </div>
          <div
            className={classnames('language-stack-name', {
              active: language === lang
            })}
          >
            {names[lang]}
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default connect(
  ({ user }) => ({
    language: user.language
  }),
  {
    changeLanguage: action.user.changeLanguage,
    closeStack: action.layout.closeStack
  },
  LanguageStack
)
