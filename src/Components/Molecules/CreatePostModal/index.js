import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../Atom/Modal'
import {ImageProfile} from '../../Atom/DummyProfile'
import Button from '../../Atom/Button'
import './CreatePostmodal.scss'

const CreatePostModal = () => {
  return (
    <Modal>
      <ModalHeader classes="text-center" title="Buat Postingan" />
      <ModalBody>
        <div className="modal-body-header">
          <ImageProfile size="40" alt="user" />
          <span className="fw-bold ms-3">Febby</span>
        </div>
        <div className="modal-body-content mt-3">
          <textarea className="form-control" name="content" id="content" cols="30" rows="10" placeholder="Apa yang Anda pikirkan, Febby ?"></textarea>
        </div>
      </ModalBody>
      <ModalFooter classes="d-grid gap-2">
        <Button color="primary" title="Kirim"/>
      </ModalFooter>
    </Modal>
  )
}

export default CreatePostModal
