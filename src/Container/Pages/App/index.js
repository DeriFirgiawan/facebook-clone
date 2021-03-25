import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../../Config/Redux'
import LoadingPage from '../../../Templates/loadingpage'

const AUTH_LOGIN_REGISTER = lazy(() => import('../../Feature/Auth'))
const Routers = lazy(() => import('../../../Routers'))

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<LoadingPage />}>
          <Route path="/" exact component={Routers} />
          <Route path="/profile" exact component={Routers} />
          <Route path="/login" exact component={AUTH_LOGIN_REGISTER} />
        </Suspense>
      </Router>
    </Provider>
  )
}

export default App
