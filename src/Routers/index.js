import {BrowserRouter as Router, Route} from 'react-router-dom'

// import Navbar from '../Components/Molecules/Navbar'
import Templates from '../Templates'
import Dashboard from '../Container/Pages/Dashboard'

import SideHome from '../Components/Molecules/SideHome'

export default function RouterHome() {
  return (
    <Router>
      <Templates 
      sidebar={
        <Route path="/home" exact component={SideHome}/>
      } 
      content={
        <Route path="/home" exact component={Dashboard}/>
      } />
    </Router>
  )
}
