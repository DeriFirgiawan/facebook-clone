export const Modal = ({children}) => {
  return (
    <div className="modal fade show" id="showModal" tabIndex={-1} aria-labelledby="showModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export const ModalHeader = ({classes, title, subtitle}) => {
  return (
    <div className={"modal-header " + classes}>
      <div className="modal-header-text">
        <h5 className="modal-title" id="showModalLabel">{title}</h5>
        <small className="modal-subtitle">{subtitle}</small>
      </div>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
    </div>
  )
}

ModalHeader.defaultProps = {
  classes: ""
}

export const ModalBody = ({children}) => {
  return (
    <div className="modal-body">
      {children}
    </div>
  )
}

export const ModalFooter = ({children}) => {
  return (
    <div className="modal-footer">
      {children}
    </div>
  )
}
