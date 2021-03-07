import Linked from '../../Atom/Linked'
import {ImageProfile} from '../../Atom/DummyProfile'

import Icons2 from '../../../Assets/Icons/2.png'
import Icons3 from '../../../Assets/Icons/3.png'
import Icons4 from '../../../Assets/Icons/4.png'
import Icons5 from '../../../Assets/Icons/5.png'
import Icons6 from '../../../Assets/Icons/6.png'
import Icons7 from '../../../Assets/Icons/7.png'
import Icons8 from '../../../Assets/Icons/8.png'


const SideHome = ({fullName}) => {
  return (
    <>
      <Linked className="nav-link" url="/profile">
        <ImageProfile size="28" alt="user" />
        <span className="mt-3 ms-3">{fullName}</span>
      </Linked>
      <Linked className="nav-link" url="/tambah-teman">
        <img className="s-28" src={Icons2} alt="Tambah Teman"/>
        <span className="mt-3 ms-3">Tambah Teman</span>
      </Linked>

      <Linked className="nav-link" url="/group">
        <img className="s-28" src={Icons3} alt="Grup"/>
        <span className="mt-3 ms-3">Grup</span>
      </Linked>

      <Linked className="nav-link" url="/marketplace">
        <img className="s-28" src={Icons4} alt="Marketplace"/>
        <span className="mt-3 ms-3">Marketplace</span>
      </Linked>

      <Linked className="nav-link" url="/watch">
        <img className="s-28" src={Icons5} alt="Watch"/>
        <span className="mt-3 ms-3">Watch</span>
      </Linked>

      <Linked className="nav-link" url="/acara">
        <img className="s-28" src={Icons6} alt="Acara"/>
        <span className="mt-3 ms-3">Acara</span>
      </Linked>

      <Linked className="nav-link" url="/kenangan">
        <img className="s-28" src={Icons7} alt="Kenangan"/>
        <span className="mt-3 ms-3">Kenangan</span>
      </Linked>

      <Linked className="nav-link" url="/tersimpan">
        <img className="s-28" src={Icons8} alt="Tersimpan"/>
        <span className="mt-3 ms-3">Tersimpan</span>
      </Linked>
    </>
  )
}

export default SideHome
