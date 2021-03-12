import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Templates from '../Templates'
import Dashboard from '../Container/Pages/Dashboard'

import SideHome from '../Components/Molecules/SideHome'

class RouterHome extends React.Component {
  state = {
    fullName: "",
    shortName: "",
  }

  componentDidMount() {
    const getDataUser = JSON.parse(localStorage.getItem('userData'))
    if (this.props.userIsLogin || getDataUser) {
      const fullName = getDataUser.displayName
      const shortName = fullName.split(' ')
      this.setState({
        fullName: fullName,
        shortName: shortName[0]
      })
    } else {
      this.props.history.push("/login")
    }
  }
  render() {
    const {fullName, shortName} = this.state
    return (
      <Fragment>
        <Router>
          <Templates shortName={shortName} fullName={fullName}
          sidebar={
            <Route path="/" exact>
              <SideHome fullName={fullName} />
            </Route>
          } 
          content={
            <Route path="/" exact component={Dashboard} />
          } />
        </Router>
      </Fragment>
    )
  }
}

const reduxState = (state) => ({
  userName: state.user,
  userIsLogin: state.isLogin
})

export default connect(reduxState, null)(RouterHome)
