import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route,} from 'react-router-dom'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'

import {logoutToApi} from '../Config/Redux/action'

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

  handleClickToLogout = () => {
    this.props.userLogout()
    this.props.history.push("/login")
  }

  render() {
    const {fullName, shortName} = this.state
    const getDataUser = JSON.parse(localStorage.getItem('userData'))
    return (
      <Fragment>
        {
          this.props.userIsLogin || getDataUser ? (
            <Router>
              <Templates shortName={shortName} fullName={fullName} clickToLogout={this.handleClickToLogout}
              sidebar={
                <Route path="/" exact>
                  <SideHome fullName={fullName} />
                </Route>
              } 
              content={
                <Route path="/" exact component={Dashboard} />
              } />
            </Router>
          ) : this.props.history.push("/login")
        }
      </Fragment>
    )
  }
}

const reduxState = (state) => ({
  userName: state.user,
  userIsLogin: state.isLogin
})

const reduxDispatch = (dispatch) => ({
  userLogout: () => dispatch(logoutToApi())
})

export default withRouter(connect(reduxState, reduxDispatch)(RouterHome))
