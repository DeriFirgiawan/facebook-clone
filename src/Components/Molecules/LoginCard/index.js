import {BrowserRouter as Router} from 'react-router-dom'

import {Card, CardBody} from '../../Atom/Card'
import Input from '../../Atom/Input'
import Button from '../../Atom/Button'
import Linked from '../../Atom/Linked'
import {TextInfo} from '../../Atom/Info'

const LoginCard = ({changeInput, textInfo, clickToLogin}) => {
  return (
    <Card>
      <CardBody>
        <div className="mb-3">
          <Input type="email" id="email" placeholder="Email atau Nomer Telepon" onChange={changeInput} />
        </div>
        <div className="mb-3">
          <Input type="password" id="password" placeholder="Kata Sandi" onChange={changeInput} />
          <TextInfo color="danger" text={textInfo} />
        </div>
        <div className="d-grid gap-2">
          <Button color="primary" title="Login" onClick={clickToLogin} />
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
