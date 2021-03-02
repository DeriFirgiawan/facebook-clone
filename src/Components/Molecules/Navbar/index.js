import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {NavbarBrand} from './NavbarBrand'
import {NavbarSearch} from './NavbarSearch'
import {NavbarToggle} from './NavbarToggle'
import {NavbarNav} from './NavbarNav'
import {dataNav} from './dataNav'
import {ImageProfile} from '../../Atom/DummyProfile'
import SideHome from '../SideHome'
import Dropdown, {DropdownMenu} from '../../Atom/Dropdown'
import Linked from '../../Atom/Linked'

import './Navbar.scss'

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false)

  function handleShowSideBar() {
    setShowSideBar(true)

    if (showSideBar) {
      setShowSideBar(false)
    }
  }

  let isSidebar
  if (showSideBar) {
    isSidebar = (
      <NavbarNav classes="p-4">
        <SideHome />
      </NavbarNav>
    )
  }
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
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
        <NavbarToggle onClick={handleShowSideBar} />
        <NavbarNav classes="ms-auto" id="navigationTwo">
          <Linked className="nav-link user-profile hide-sm hide-md" url="#">
            <ImageProfile size="28" alt="user" />
            <span className="profile-name fw-bold">
              Febby
            </span>
          </Linked>

          <NavLink className="nav-link d-inline-flex align-content-center justify-content-center bg-grey-50 radius-50 wh-40" to="/post" title="Post">
            <i className="bx bx-plus icon-size-24"></i>
          </NavLink>

          <NavLink className="nav-link d-inline-flex align-content-center justify-content-center bg-grey-50 radius-50 wh-40" to="/obrolan" title="Obrolan">
            <i className="bx bxl-messenger icon-size-24"></i>
          </NavLink>

          <Dropdown classes="nav-link d-inline-flex align-content-center justify-content-center bg-grey-50 radius-50 wh-40" icon="bxs-bell">
            <DropdownMenu />
          </Dropdown>

          <Dropdown classes="nav-link d-inline-flex align-content-center justify-content-center bg-grey-50 radius-50 wh-40" icon="bxs-down-arrow">
            <DropdownMenu />
          </Dropdown>
        </NavbarNav>
      </div>
      {isSidebar}
    </nav>
  )
}

export default Navbar
