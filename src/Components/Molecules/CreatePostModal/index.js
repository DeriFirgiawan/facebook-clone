import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../Atom/Modal'
import {ImageProfile} from '../../Atom/DummyProfile'

const CreatePostModal = ({childInput, childButton, fullName}) => {
  return (
    <Modal>
      <ModalHeader classes="Form-Post-Modal text-center" title="Buat Postingan" />
      <ModalBody>
        <div className="modal-body-header">
          <ImageProfile size="40" alt="user" />
          <span className="fw-bold ms-3">{fullName}</span>
        </div>
        <div className="modal-body-content mt-3">
          {childInput}
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="d-grid gap-2">
          {childButton}
        </div>
      </ModalFooter>
    </Modal>
  )
}

export default CreatePostModal
