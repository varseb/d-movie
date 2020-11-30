import { Provider } from 'react-redux'
import store from 'redux/store'
import Layout from 'component/Layout'
import Main from 'view/Main'

import 'asset/scss/app.scss'

const App = () => (
  <Provider store={store}>
    <Layout>
      <Main />
    </Layout>
  </Provider>
)

export default App
