import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from '../../../Config/Redux'
import AUTH_LOGIN_REGISTER from '../../Feature/Auth'
import RouterHome from '../../../Routers'

import './_App.module.scss'

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/login" exact component={AUTH_LOGIN_REGISTER} />
        <Route path="/" exact component={RouterHome} />
      </Router>
    </Provider>
  )
}
