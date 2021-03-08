import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Templates from '../Templates'
import Dashboard from '../Container/Pages/Dashboard'

import SideHome from '../Components/Molecules/SideHome'

class RouterHome extends React.Component {
  render() {
    const fullUserName = this.props.userName.displayName
    const shortName = fullUserName.split(' ')
    return (
      <Router>
        <Templates shortName={shortName[0]} fullName={fullUserName}
        sidebar={
          <Route path="/home" exact>
            <SideHome fullName={fullUserName} />
          </Route>
        } 
        content={
          <Route path="/home" exact >
            <Dashboard fullName={fullUserName} shortName={shortName[0]} />
          </Route>
        } />
      </Router>
    )
  }
}

const reduxState = (state) => ({
  userName: state.user,
})

export default connect(reduxState, null)(RouterHome)
