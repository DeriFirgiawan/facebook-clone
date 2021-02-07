import {Provider} from 'react-redux'
import {store} from '../../../Config/Redux'
import Login from '../Login'

import './App.scss'

export default function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  )
}
