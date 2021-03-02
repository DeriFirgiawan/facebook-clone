import {Card, CardBody} from '../../Atom/Card'

import './CardCreatePost.scss'

const CardCreatePost = () => {
  return (
    <Card clasess="Form-Post mt-3 shadows-1 border-0">
      <CardBody clasess="Form-Post-Body">
        <img src="https://placeimg.com/40/40/people" alt="user" className="radius-50"/>
        <div className="Form-Post-Body-Input ms-3">
          <span className="Form-Post-Body-Input-Text">
            Apa yang Anda Pikirkan, Febby?
          </span>
        </div>
      </CardBody>
      <div className="card-footer Form-Post-Footer">
        <div className="Form-Post-Footer-Icon">
          <i className="bx bxs-video"></i>
          <span className="text ms-2">Video Siaran Langsung</span>
        </div>
        <div className="Form-Post-Footer-Icon hide-sm">
          <i className="bx bx-images"></i>
          <span className="text ms-2">Foto/Video</span>
        </div>
      </div>
    </Card>
  )
}

export default CardCreatePost
