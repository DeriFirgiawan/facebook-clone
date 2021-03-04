import React from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'

import {loginUserToAPI} from '../../../../Config/Redux/action'

import LoginCard from '../../../../Components/Molecules/LoginCard'

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    lengthPassword: false,
  }

  handleChangeInput = (event) => {
    const idInput = event.target.id
    const resultInput = event.target.value
    this.setState({
      [idInput]: resultInput
    })

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

  handleClickToLogin = async () => {
    const {email, password} = this.state
    const {history} = this.props

    const res = await this.props.loginAPI({email, password}).catch(err => console.log(err))

    if (res) {
      history.push('/home')
    } else {
      console.log('Login Failed')
      console.error(res)
    }
  }

  render() {
    let errorText
    if (this.state.lengthPassword) {
      errorText = 'Password minimal 8 character'
    }
    return (
      <LoginCard changeInput={this.handleChangeInput} textInfo={errorText} clickToLogin={this.handleClickToLogin}/>
    )
  }
}


const reduxState = state => ({
  loading: state.isLoading
})

const reduxDispatch = dispatch => ({
  loginAPI: (data) => dispatch(loginUserToAPI(data))
})

export default withRouter(connect(reduxState, reduxDispatch)(LoginForm))
