import React from 'react'
import firebase from '../../../../Config/Firebase'
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
    const {emailField, passwordField} = this.state
    firebase.auth().createUserWithEmailAndPassword(emailField, passwordField).then(res => {
      console.log('success: ', res)
    }).catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.error(errorCode)
      console.error(errorMessage)
    })
  }
  render(){
    return (
      <RegisterModal registerChangeText={this.handleChangeRegister} clickToRegister={this.handleClickToRegister}/>
    )
  }
}

export default RegisterForm
