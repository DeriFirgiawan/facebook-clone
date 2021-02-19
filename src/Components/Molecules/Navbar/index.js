import Linked from '../../Atom/Linked'
import SearchBar from '../SearchBar'
import {NavbarBrand} from './NavbarBrand'
import {NavbarNav} from './NavbarNav'

import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <NavbarBrand />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <form className="d-flex">
          <SearchBar />
        </form>

        {/* <NavbarNav>

        </NavbarNav> */}
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavbarNav classes="ms-auto">
            <Linked className="nav-link" to="#">Home</Linked>
            <Linked className="nav-link" to="#">Link</Linked>
            <Linked className="nav-link" to="#">Hello</Linked>
          </NavbarNav>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
