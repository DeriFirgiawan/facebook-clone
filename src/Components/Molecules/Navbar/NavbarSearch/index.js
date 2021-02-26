import SearchBar from '../../SearchBar'

export const NavbarSearch = () => {
  return (
    <div className="navbar__search">
      <div className="navbar__search__lg hide-md hide-sm">
        <SearchBar />
      </div>
      <div className="navbar__search__sm d-lg-none navbar-nav mx-1">
        <span className="nav-link bg-grey-50 radius-50 pd-10">
          <i className="bx bx-search fs-2 position-relative top"></i>
        </span>
      </div>
    </div>
  )
}
