import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../Atom/Modal'
import InputField from '../../Atom/Input'
import {Row, Columns} from '../../Layout/Grid'

import dataInputFields from './dataInputFields'
import {getMonths} from '../../../Config/Moment'

import './RegisterModal.scss'

const RegisterModal = () => {
  console.log(getMonths)
  return (
    <Modal>
      <ModalHeader title="Daftar" subtitle="Ini cepat dan mudah."/>
      <ModalBody>
        <Row>
          {
            dataInputFields.map(result => {
              return (
                <Columns size={result.col} key={result.uniqueId}>
                  <div className="mb-3">
                    <InputField id={result.id} type={result.type} placeholder={result.text} />
                  </div>
                </Columns>
              )
            })
          }
        </Row>
        <Row>
          <Columns size="col-sm-4">
            <select className="form-select" aria-label="8">
              <option selected>8</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </Columns>
          <Columns size="col-sm-4">
            <select className="form-select" aria-label="Feb">
              <option selected>Feb</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </Columns>
          <Columns size="col-sm-4">
            <select className="form-select" aria-label="2021">
              <option selected>2021</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </Columns>
        </Row>
      </ModalBody>
      <ModalFooter />
    </Modal>
  )
}

export default RegisterModal
