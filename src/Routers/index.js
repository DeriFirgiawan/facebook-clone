import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Templates from '../Templates'
import Dashboard from '../Container/Pages/Dashboard'

import SideHome from '../Components/Molecules/SideHome'

class RouterHome extends React.Component {
  render() {
    const getDataUser = JSON.parse(localStorage.getItem('userData'))
    const fullName = getDataUser.displayName
    const shortName = fullName.split(' ')
    return (
      <Router>
        <Templates shortName={shortName[0]} fullName={fullName}
        sidebar={
          <Route path="/home" exact>
            <SideHome fullName={fullName} />
          </Route>
        } 
        content={
          <Route path="/home" exact component={Dashboard} />
        } />
      </Router>
    )
  }
}

const reduxState = (state) => ({
  userName: state.user,
})

export default connect(reduxState, null)(RouterHome)
