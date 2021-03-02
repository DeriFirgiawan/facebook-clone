import SearchBar from '../../SearchBar'

export const NavbarSearch = () => {
  return (
    <div className="navbar__search">
      <div className="navbar__search__lg hide-md hide-sm">
        <SearchBar />
      </div>
      <div className="navbar__search__sm d-lg-none navbar-nav mx-1">
        <span className="nav-link d-inline-flex align-content-center justify-content-center bg-grey-50 radius-50 wh-40">
          <i className="bx bx-search icon-size-24"></i>
        </span>
      </div>
    </div>
  )
}
