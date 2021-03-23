import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../../Config/Redux'
import AUTH_LOGIN_REGISTER from '../../Feature/Auth'
import Routers from '../../../Routers'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Routers} />
        <Route path="/profile" exact component={Routers} />
        <Route path="/login" exact component={AUTH_LOGIN_REGISTER} />
      </Router>
    </Provider>
  )
}

export default App
