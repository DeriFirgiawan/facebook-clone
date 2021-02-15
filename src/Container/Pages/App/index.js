import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from '../../../Config/Redux'
import Login from '../Login'
import Dashboard from '../Dashboard'
import './App.scss'

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Dashboard} />
      </Router>
    </Provider>
  )
}
