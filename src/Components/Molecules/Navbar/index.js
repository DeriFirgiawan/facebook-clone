import {NavLink} from 'react-router-dom'
import {NavbarToggle} from './NavbarToggle'
import {NavbarBrand} from './NavbarBrand'
import {NavbarNav} from './NavbarNav'
import {dataNav} from './dataNav'
import Linked from '../../Atom/Linked'
import SearchBar from '../SearchBar'

import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <NavbarBrand />
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
        <NavbarToggle />

        <NavbarNav classes="mx-auto hide-sm" id="navigationOne">
          {
            dataNav.navigation_1.map(result => {
              return (
                <NavLink className={"pd-10 " + result.class} to={result.url} title={result.title} key={result.url}>
                  <i className={"bx position-relative top-3 " + result.icon}></i>
                </NavLink>
              )
            })
          }
        </NavbarNav>

        <NavbarNav classes="ms-auto" id="navigationTwo">
          <Linked className="nav-link hide-sm hide-md" url="#">
            <img src="https://placeimg.com/30/30/people" alt="user" className="radius-50"/>
          </Linked>
          <NavLink className="nav-link bg-grey-50 radius-50" to="/post" title="Post">
            <i className="bx bx-plus position-relative top"></i>
          </NavLink>
          <NavLink className="nav-link bg-grey-50 radius-50 " to="/obrolan" title="Obrolan">
            <i className="bx bxl-messenger position-relative top"></i>
          </NavLink>
          <div className="dropdown">
            <span className="nav-link bg-grey-50 radius-50 " role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bx bxs-bell position-relative top"></i>
            </span>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><Linked className="dropdown-item" to="#">Action</Linked></li>
              <li><Linked className="dropdown-item" to="#">Another action</Linked></li>
              <li><Linked className="dropdown-item" to="#">Something else here</Linked></li>
            </ul>
          </div>

          <div className="dropdown">
            <span className="nav-link bg-grey-50 radius-50 " role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bx bxs-down-arrow position-relative top" ></i>
            </span>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><Linked className="dropdown-item" to="#">Action</Linked></li>
              <li><Linked className="dropdown-item" to="#">Another action</Linked></li>
              <li><Linked className="dropdown-item" to="#">Something else here</Linked></li>
            </ul>
          </div>
        </NavbarNav>
        
      </div>
      {/* <div className="collapse navbar-collapse d-none" id="navbarSupportedContent">
        sidebar
      </div> */}
    </nav>
  )
}

export default Navbar
