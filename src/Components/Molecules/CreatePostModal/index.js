import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../Atom/Modal'

import './CreatePostmodal.scss'

const CreatePostModal = () => {
  return (
    <Modal>
      <ModalHeader classes="text-center" title="Buat Postingan" />
      <ModalBody>
        <h2>Mari Buat Postingan</h2>
      </ModalBody>
      <ModalFooter>
        <button>Kirim</button>
      </ModalFooter>
    </Modal>
  )
}

export default CreatePostModal
