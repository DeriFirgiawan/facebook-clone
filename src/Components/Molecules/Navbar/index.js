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

const Navbar = ({shortName, fullName, clickToLogout}) => {
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
        <SideHome fullName={fullName} />
      </NavbarNav>
    )
  }
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light shadows-1">
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
          <NavLink className="nav-link user-profile hide-sm hide-md" to="/profile">
            <ImageProfile size="28" alt="user" />
            <span className="profile-name fw-bold">
              {shortName}
            </span>
          </NavLink>

          <NavLink className="nav-link d-inline-flex align-content-center justify-content-center bg-grey-50 radius-50 wh-40" to="/post" title="Post">
            <i className="bx bx-plus icon-size-24"></i>
          </NavLink>

          <NavLink className="nav-link d-inline-flex align-content-center justify-content-center bg-grey-50 radius-50 wh-40" to="/obrolan" title="Obrolan">
            <i className="bx bxl-messenger icon-size-24"></i>
          </NavLink>

          <Dropdown classes="nav-link d-inline-flex align-content-center justify-content-center bg-grey-50 radius-50 wh-40" id="dropdown-notification" icon="bxs-bell">
            <DropdownMenu>
              <li>
                <div className="dropdown-item d-flex align-content-center">
                  <h4 className="fw-bold">Notifikasi</h4>
                  <div className="dropdown-item-icon-more ms-auto">
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </div>
                </div>
              </li>
              <li><span className="dropdown-item">Another action</span></li>
              <li><span className="dropdown-item">Something else here</span></li>
            </DropdownMenu>
          </Dropdown>

          <Dropdown classes="nav-link d-inline-flex align-content-center justify-content-center bg-grey-50 radius-50 wh-40" id="dropdown-more" icon="bxs-down-arrow">
            <DropdownMenu>
              <li>
                <Linked url="#" className="dropdown-item">
                  <ImageProfile size="40" alt={fullName} />
                  <div className="User-Profile ms-3 d-inline-flex justify-content-center align-content-center flex-column">
                    <span className="fw-bold">
                      {fullName}
                    </span>
                    <span className="text-muted">
                      Lihat Profile Anda
                    </span>
                  </div>
                </Linked>
              </li>

              <li>
                <div className="line-1"></div>
                <Linked url="#" className="dropdown-item">
                  <div className="dropdown-item-icon">
                    <i className="bx bxs-message-error"></i>
                  </div>
                  <div className="dropdown-item-text ms-2">
                    <div className="dropdown-item-text-subheading">
                      <span>
                        Beri Masukan
                      </span>
                    </div>
                    <div className="dropdown-item-text-paragraph">
                      <span className="text-muted">
                        Bantu kami menyempurnakan layanan Facebook yang baru.
                      </span>
                    </div>
                  </div>
                </Linked>
                <div className="line-1"></div>
              </li>

              <li>
                <Linked url="#" className="dropdown-item">
                  <div className="dropdown-item-icon">
                    <i className="bx bxs-cog"></i>
                  </div>
                  <span className="ms-3">
                    Pengaturan & Privasi
                  </span>
                </Linked>
              </li>

              <li>
                <Linked url="#" className="dropdown-item">
                  <div className="dropdown-item-icon">
                    <i className="bx bxs-help-circle"></i>
                  </div>
                  <span className="ms-3">
                    Bantuan & Dukungan
                  </span>
                </Linked>
              </li>

              <li>
                <Linked url="#" className="dropdown-item">
                  <div className="dropdown-item-icon">
                    <i className="bx bxs-moon"></i>
                  </div>
                  <span className="ms-3">
                    Tampilan & Aksesibilitas
                  </span>
                </Linked>
              </li>

              <li>
                <span className="dropdown-item" onClick={clickToLogout}>
                  <div className="dropdown-item-icon">
                    <i className="bx bxs-log-out"></i>
                  </div>
                  <span className="ms-3">
                    Keluar
                  </span>
                </span>
              </li>
            </DropdownMenu>
          </Dropdown>
        </NavbarNav>
      </div>
      {isSidebar}
    </nav>
  )
}

export default Navbar
