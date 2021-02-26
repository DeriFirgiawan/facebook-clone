import {NavLink} from 'react-router-dom'
import {NavbarBrand} from './NavbarBrand'
import {NavbarSearch} from './NavbarSearch'
import {NavbarToggle} from './NavbarToggle'
import {NavbarNav} from './NavbarNav'
import {dataNav} from './dataNav'
import Dropdown, {DropdownMenu} from '../../Atom/Dropdown'
import Linked from '../../Atom/Linked'

import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <NavbarBrand />
        <NavbarSearch />
        

        <NavbarNav classes="mx-auto hide-sm" id="navigationOne">
          {
            dataNav.navigation_1.map(result => {
              return (
                <NavLink className={"rounded-1 " + result.class} to={result.url} title={result.title} key={result.url}>
                  <i className={"bx position-relative top-3 " + result.icon}></i>
                </NavLink>
              )
            })
          }
        </NavbarNav>
        <NavbarToggle />
        <NavbarNav classes="ms-auto" id="navigationTwo">
          <Linked className="nav-link hide-sm hide-md" url="#">
            <img src="https://placeimg.com/28/28/people" alt="user" className="radius-50"/>
            <span className="profile-name fw-bold position-relative mb-2">
              Febby
            </span>
          </Linked>

          <NavLink className="nav-link bg-grey-50 radius-50" to="/post" title="Post">
            <i className="bx bx-plus position-relative top"></i>
          </NavLink>

          <NavLink className="nav-link bg-grey-50 radius-50 " to="/obrolan" title="Obrolan">
            <i className="bx bxl-messenger position-relative top"></i>
          </NavLink>

          <Dropdown classes="nav-link bg-grey-50 radius-50" icon="bxs-bell">
            <DropdownMenu />
          </Dropdown>

          <Dropdown classes="nav-link bg-grey-50 radius-50" icon="bxs-down-arrow">
            <DropdownMenu />
          </Dropdown>
        </NavbarNav>
      </div>
    </nav>
  )
}

export default Navbar
