import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../Atom/Modal'
import InputField from '../../Atom/Input'
import Button from '../../Atom/Button'

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
        <div className="row">
          {
            dataInputFields.map(result => {
              return (
                <div className={result.col} 
                key={result.uniqueId}>
                  <div className="mb-3">
                    <InputField id={result.id} type={result.type} placeholder={result.text} onChange={registerChangeText}
                    />
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="row">
          <div className="col col-md-4 col-sm-6">
            <select 
            className="form-select" 
            aria-label="Tanggal" onChange={registerChangeText}>
              {
                getDataDays.map(result => {
                  return (
                    <option 
                    value="25" 
                    key={result.id} 
                    selected>
                      {result.id}
                    </option>
                  )
                })
              }
            </select>
          </div>
          <div className="col col-md-4 col-sm-6">
            <select className="form-select" aria-label="Bulan" onChange={registerChangeText}>
              {
                getDataMonths.map(result => {
                  return (
                    <option value="Apr" key={result} selected>{result}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="col col-md-4 col-sm-6">
            <select className="form-select" aria-label="Tahun" onChange={registerChangeText}>
              {
                years.map(resultYears => {
                  return (
                    <option value="2003" key={resultYears} selected>{resultYears}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="success" title="Daftar" onClick={clickToRegister}/>
      </ModalFooter>
    </Modal>
  )
}

export default RegisterModal
