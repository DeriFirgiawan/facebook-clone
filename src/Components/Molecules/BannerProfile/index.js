import {ImageProfile} from '../../Atom/DummyProfile'

const BannerProfile = ({name}) => {
  return (
    <section className="Banner-Profile">
      <div className="Banner-Profile-Content container">
        <div className="Banner-Profile-Content-Cover"></div>
        <div className="Banner-Profile-Content-Hero">
          <ImageProfile size="168" alt="User" />
        </div>
        <span className="Banner-Profile-Content-Hero-Name text-center">
          {name}
        </span>
        <section className="Banner-Profile-Content-Navigation mt-3">
          <span className="Banner-Profile-Content-Navigation-Link">Postingan</span>
          <span className="Banner-Profile-Content-Navigation-Link">Tentang</span>
          <span className="Banner-Profile-Content-Navigation-Link">Teman</span>
          <span className="Banner-Profile-Content-Navigation-Link">Foto</span>
          <span className="Banner-Profile-Content-Navigation-Link">Lainnya</span>
        </section>
      </div>
    </section>
  )
}

export default BannerProfile
