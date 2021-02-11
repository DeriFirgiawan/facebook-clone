import React from 'react'

import HeroBanner from '../../../Components/Molecules/HeroBanner'
import LoginForm from '../../Feature/Auth/LoginForm'
import RegisterForm from '../../Feature/Auth/RegisterForm'

import Logo from '../../../Assets/Logo/logo.svg'

import './Login.scss'

class Login extends React.Component {
  render() {
    return (
      <main className="Login__Page container">
        <HeroBanner img={Logo} alt="Facebook" text="Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda." title="Facebook" />
        <LoginForm/>
        <RegisterForm />
      </main>
    )
  }
}

export default Login
