import React from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'

import {loginUserToAPI, registerUserToFirebase} from '../../../Config/Redux/action'

import LoginCard from '../../../Components/Molecules/LoginCard'
import RegisterModal from '../../../Components/Molecules/RegisterModal'
import HeroBanner from '../../../Components/Molecules/HeroBanner'

import Logo from '../../../Assets/Logo/logo.svg'

class AUTH_LOGIN_REGISTER extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    lengthPassword: false,
    emailField: '',
    passwordField: ''
  }

  convertTextCapital = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word) {
      return word.toUpperCase()
    })
  }

  onChangeInput = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
    if (event.target.id === "password") {
      if (event.target.value.length < 8) {
        this.setState({
          lengthPassword: true
        })
      } else {
        this.setState({
          lengthPassword: false
        })
      }
    }
  }

  handleClickLogin = async () => {
    const {email, password} = this.state
    const {history} = this.props

    const res = await this.props.authLogin({email, password}).catch(err => console.log(err))

    if (res) {
      localStorage.setItem("userData", JSON.stringify(res))
      history.push("/")
    } else {
      console.log('Login Failed')
      console.error(res)
    }
  }

  handleClickRegister = () => {
    const {
      emailField,
      passwordField,
      firstName,
      lastName
    } = this.state

    const yourFirstName = this.convertTextCapital(firstName)
    const yourLastName = this.convertTextCapital(lastName)
    const userName = `${yourFirstName} ${yourLastName}`

    setTimeout(() => {
      this.props.authRegister({
        emailField,
        passwordField,
        userName
      })
    }, 0);
  }

  render () {
    let errorText
    if (this.state.lengthPassword) {
      errorText = 'Password minimal 8 character'
    }
    return (
      <main className="Login__Page container">
        <HeroBanner img={Logo} alt="Facebook" text="Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda." title="Facebook" />
        <LoginCard changeInput={this.onChangeInput} clickToLogin={this.handleClickLogin} textInfo={errorText} />
        <RegisterModal registerChangeText={this.onChangeInput} clickToRegister={this.handleClickRegister} />
      </main>
    )
  }
}

const reduxState = (state) => ({
  loading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
  authLogin: (data) => dispatch(loginUserToAPI(data)),
  authRegister: (data) => dispatch(registerUserToFirebase(data))
})

export default withRouter(connect(reduxState, reduxDispatch)(AUTH_LOGIN_REGISTER)) 
