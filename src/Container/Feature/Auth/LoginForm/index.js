import React from 'react'

import LoginCard from '../../../../Components/Molecules/LoginCard'

class LoginForm extends React.Component {
  state = {
    lengthPassword: false
  }

  handleChangeInput = (event) => {
    const idInput = event.target.id
    const resultInput = event.target.value

    if (idInput === 'password') {
      if (resultInput.length < 8) {
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

  render() {
    let errorText
    if (this.state.lengthPassword) {
      errorText = 'Password minimal 8 character'
    }
    return (
      <LoginCard changeEmail={this.handleChangeInput} changePassword={this.handleChangeInput} textInfo={errorText}/>
    )
  }
}

export default LoginForm
