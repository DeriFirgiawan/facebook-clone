const Dropdown = ({id, icon, children, classes, position}) => {
  return (
    <div className={"dropdown " + position} id={id}>
      <span className={classes} role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        <i className={"bx position-relative top " + icon}></i>
      </span>
      {children}
    </div>
  )
}

Dropdown.defaultProps = {
  classes: "btn btn-secondary dropdown-toggle",
  position: ""
}

export const DropdownMenu = ({children}) => {
  return (
    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
      {children}
    </ul>
  )
}

export default Dropdown
