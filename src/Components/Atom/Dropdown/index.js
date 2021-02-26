const Dropdown = ({icon, children, classes}) => {
  return (
    <div className="dropdown">
      <span className={classes} role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        <i className={"bx position-relative top " + icon}></i>
      </span>
      {children}
    </div>
  )
}

Dropdown.defaultProps = {
  classes: "btn btn-secondary dropdown-toggle"
}

export const DropdownMenu = () => {
  return (
    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
      <li><span className="dropdown-item">Action</span></li>
      <li><span className="dropdown-item">Another action</span></li>
      <li><span className="dropdown-item">Something else here</span></li>
    </ul>
  )
}

export default Dropdown
