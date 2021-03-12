import Linked from '../../../Atom/Linked'

import Logo from '../../../../Assets/Icons/icon.svg'

export const NavbarBrand = () => {
  return (
    <Linked url="/">
      <img src={Logo} alt="Facebook"/>
    </Linked>
  )
}
