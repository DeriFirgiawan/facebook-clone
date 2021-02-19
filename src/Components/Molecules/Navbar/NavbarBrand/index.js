import Linked from '../../../Atom/Linked'

import LogoDesktop from '../../../../Assets/Icons/icon.svg'

export const NavbarBrand = () => {
  return (
    <Linked to="/">
      <img src={LogoDesktop} alt="Facebook"/>
    </Linked>
  )
}
