import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../Atom/Modal'
import InputField from '../../Atom/Input'
import Button from '../../Atom/Button'
import {Row, Columns} from '../../Layout/Grid'

import dataInputFields from './dataInputFields'
import {getDataDays, getDataMonths, getDataYears} from '../../../Config/Moment'


const RegisterModal = ({registerChangeText, clickToRegister}) => {
  const years = getDataYears(116)
  return (
    <Modal>
      <ModalHeader 
        classes="Register-Modal-Header"
        title="Daftar" 
        subtitle="Ini cepat dan mudah."
      />
      <ModalBody>
        <Row>
          {
            dataInputFields.map(result => {
              return (
                <Columns 
                size={result.col} 
                key={result.uniqueId}>
                  <div className="mb-3">
                    <InputField id={result.id} type={result.type} placeholder={result.text} onChange={registerChangeText}
                    />
                  </div>
                </Columns>
              )
            })
          }
        </Row>
        <Row>
          <Columns size="col col-md-4 col-sm-6">
            <select 
            className="form-select" 
            aria-label="Tanggal" 
            defaultValue="DEFAULT">
              {
                getDataDays.map(result => {
                  return (
                    <option 
                    defaultValue="DEFAULT"
                    value={result.value} 
                    key={result.id} 
                    selected>
                      {result.id}
                    </option>
                  )
                })
              }
            </select>
          </Columns>
          <Columns size="col col-md-4 col-sm-6">
            <select className="form-select" aria-label="Bulan" defaultValue="DEFAULT">
              {
                getDataMonths.map(result => {
                  return (
                    <option defaultValue="DEFAULT" value={result} key={result} selected>{result}</option>
                  )
                })
              }
            </select>
          </Columns>
          <Columns size="col col-md-4 col-sm-6">
            <select className="form-select" aria-label="Tahun" defaultValue="DEFAULT">
              {
                years.map(resultYears => {
                  return (
                    <option defaultValue="DEFAULT" selected value={resultYears} key={resultYears}>{resultYears}</option>
                  )
                })
              }
            </select>
          </Columns>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button color="success" title="Daftar" onClick={clickToRegister}/>
      </ModalFooter>
    </Modal>
  )
}

export default RegisterModal
