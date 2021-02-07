export const Modal = ({children}) => {
  return (
    <div className="modal fade" id="showModal" tabIndex={-1} aria-labelledby="showModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export const ModalHeader = ({title, subtitle}) => {
  return (
    <div className="modal-header">
      <div className="modal-header-text">
        <h5 className="modal-title" id="showModalLabel">{title}</h5>
        <small className="modal-subtitle">{subtitle}</small>
      </div>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
    </div>
  )
}

export const ModalBody = ({children}) => {
  return (
    <div className="modal-body">
      {children}
    </div>
  )
}

export const ModalFooter = () => {
  return (
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" className="btn btn-primary">Save changes</button>
    </div>
  )
}
