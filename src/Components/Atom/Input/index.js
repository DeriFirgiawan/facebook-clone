const Input = ({id,type,placeholder, onChange}) => {
  return (
    <input type={type} className="form-control" id={id} placeholder={placeholder} onChange={onChange} />
  )
}

export default Input
