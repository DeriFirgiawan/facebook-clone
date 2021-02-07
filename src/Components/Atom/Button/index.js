const Button = ({color, title, onClick, dataToggle, dataTarget}) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick} data-bs-toggle={dataToggle} data-bs-target={dataTarget}>
      {title}
    </button>
  )
}

Button.defaultProps = {
  color: 'light'
}

export default Button
