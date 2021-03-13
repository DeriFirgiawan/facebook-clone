const FormPostUpload = ({classes, icon, text}) => {
  return (
    <div className={"Form-Post-Footer-Icon " + classes}>
      <i className={"bx " + icon}></i>
      <span className="text ms-2">{text}</span>
    </div>
  )
}

FormPostUpload.defaultProps = {
  classes: ""
}

export default FormPostUpload
