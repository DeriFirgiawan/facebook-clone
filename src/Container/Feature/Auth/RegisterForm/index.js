import React from 'react'
import {connect} from 'react-redux'
import {registerUserToFirebase} from '../../../../Config/Redux/action'
import RegisterModal from '../../../../Components/Molecules/RegisterModal'

class RegisterForm extends React.Component{
  state = {
    firstName: '',
    lastName: '',
    emailField: '',
    passwordField: ''
  }

  handleChangeRegister = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleClickToRegister = () => {
    const {
      emailField,
      passwordField,
      firstName,
      lastName
    } = this.state
    const userName = `${firstName} ${lastName}`
    setTimeout(() => {
      this.props.registerAPI({
        emailField,
        passwordField,
        userName
      })
    }, 0);
  }
  render(){
    console.log(this.props.loading)
    return (
      <RegisterModal registerChangeText={this.handleChangeRegister} clickToRegister={this.handleClickToRegister}/>
    )
  }
}

const reduxState = (state) => ({
  loading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
  registerAPI: (data) => dispatch(registerUserToFirebase(data))
})

export default connect(reduxState, reduxDispatch)(RegisterForm)
