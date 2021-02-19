import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from '../Components/Molecules/Navbar'

import Dashboard from '../Container/Pages/Dashboard'
export default function RouterHome() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={Dashboard}/>
    </Router>
  )
}