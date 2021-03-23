/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router'

import { logoutToApi } from '../Config/Redux/action'

// import AUTH_LOGIN_REGISTER from '../Container/Feature/Auth'
import Dashboard from '../Container/Pages/Dashboard'
import Profile from '../Container/Pages/Profile'
import Navbar from '../Components/Molecules/Navbar'
import SideHome from '../Components/Molecules/SideHome'

const Routers = ({isUserLogin, authLogout}) => {
  const history = useHistory()
  const [fullName, setFullName] = useState("")
  const [firstName, setFirstName] = useState("")
  const getDataUser = JSON.parse(localStorage.getItem("userData"))
  
  const getUserName = () => {
    if (getDataUser) {
      const userFullName = getDataUser.displayName
      const userFirstName = userFullName.split(" ")
      setFullName(userFullName)
      setFirstName(userFirstName[0])
    }
  }
  
  useEffect(() => {
    getUserName()
  }, [fullName, firstName])

  const handleUserLogout = () => {
    console.log("Logout")
    authLogout()
    history.push("/login")
  }
  return (
    <Fragment>
      {
        getDataUser || isUserLogin ? (
          <Fragment>
            <Navbar shortName={firstName} fullName={fullName} clickToLogout={handleUserLogout} />
            <Route path="/" exact>
              <main className="wrapper">
                <div className="sidebar navbar-collapse hide-md hide-sm">
                  <SideHome fullName={fullName} />
                </div>
                <Dashboard />
              </main>
            </Route>
            <Route path="/profile" exact >
              <Profile fullName={fullName} />
            </Route>
          </Fragment>
        ) : history.push("/login")
      }
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  isUserLogin: state.isLogin
})

const mapDispatchToProps = (dispatch) => ({
  authLogout: () => dispatch(logoutToApi())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routers))
