import {BrowserRouter as Router} from 'react-router-dom'

import {Card, CardBody} from '../../Atom/Card'
import Input from '../../Atom/Input'
import Button from '../../Atom/Button'
import Linked from '../../Atom/Linked'
import {TextInfo} from '../../Atom/Info'

import './LoginCard.scss'

const LoginCard = ({changeEmail, changePassword, textInfo, clickShowRegister}) => {
  return (
    <Card>
      <CardBody>
        <div className="mb-3">
          <Input type="email" id="email" placeholder="Email atau Nomer Telepon" onChange={changeEmail} />
        </div>
        <div className="mb-3">
          <Input type="password" id="password" placeholder="Kata Sandi" onChange={changePassword} />
          <TextInfo color="danger" text={textInfo} />
        </div>
        <div className="d-grid gap-2">
          <Button color="primary" title="Login" />
        </div>
        <div className="card-bottom text-center mt-2">
          <Router>
            <Linked url="/forgot" className="forgot-password" text="Lupa Kata Sandi?" />
          </Router>
          <div className="line-1"></div>
          <Button color="success mt-3" title="Buat Akun Baru" dataToggle="modal" dataTarget="#showModal" />
        </div>
      </CardBody>
    </Card>
  )
}

export default LoginCard
