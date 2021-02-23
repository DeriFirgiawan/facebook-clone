export const NavbarNav = ({children, classes, id}) => {
  return (
    <div className={"navbar-nav " + classes} id={id}>
      {children}
    </div>
  )
}

NavbarNav.defaultProps = {
  classes: ''
}
