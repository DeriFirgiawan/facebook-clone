import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../Atom/Modal'
import InputField from '../../Atom/Input'
import {Row, Columns} from '../../Layout/Grid'

import dataInputFields from './dataInputFields'
import {dataDay, dataMonth, dataYears} from '../../../Config/Moment'

import './RegisterModal.scss'

const RegisterModal = () => {
  const years = dataYears(116)
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
            <select className="form-select" aria-label="Tanggal" defaultValue="DEFAULT">
              {
                dataDay.map(result => {
                  return (
                    <option value={result.value} key={result.id} selected>
                      {result.id}
                    </option>
                  )
                })
              }
            </select>
          </Columns>
          <Columns size="col-sm-4">
            <select className="form-select" aria-label="Bulan" defaultValue="DEFAULT">
              {
                dataMonth.map(result => {
                  return (
                    <option value={result.id} key={result.id}selected>{result.month}</option>
                  )
                })
              }
            </select>
          </Columns>
          <Columns size="col-sm-4">
            <select className="form-select" aria-label="Tahun" defaultValue="DEFAULT">
              {
                years.map(resultYears => {
                  return (
                    <option selected value={resultYears} key={resultYears}>{resultYears}</option>
                  )
                })
              }
            </select>
          </Columns>
        </Row>
      </ModalBody>
      <ModalFooter />
    </Modal>
  )
}

export default RegisterModal
