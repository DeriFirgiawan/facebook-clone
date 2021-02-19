export const NavbarNav = ({children, classes}) => {
  return (
    <div className={"navbar-nav " + classes}>
      {children}
    </div>
  )
}

NavbarNav.defaultProps = {
  classes: ''
}
