import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../Atom/Modal'
import InputField from '../../Atom/Input'
import {Row, Columns} from '../../Layout/Grid'

import dataInputFields from './dataInputFields'

import './RegisterModal.scss'

const RegisterModal = () => {
  
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
      </ModalBody>
      <ModalFooter />
    </Modal>
  )
}

export default RegisterModal
