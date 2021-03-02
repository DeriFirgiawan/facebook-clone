import {Card, CardBody, CardFooter} from '../../Atom/Card'
import FormPostUpload from './FormPostUpload'

import './CardCreatePost.scss'

const CardCreatePost = () => {
  return (
    <Card classes="Form-Post mt-3 shadows-1 border-0">
      <CardBody classes="Form-Post-Body">
        <img src="https://placeimg.com/40/40/people" alt="user" className="radius-50"/>
        <div className="Form-Post-Body-Input ms-3" role="button" data-bs-toggle="modal" data-bs-target="#showModal">
          <span className="Form-Post-Body-Input-Text">
            Apa yang Anda Pikirkan, Febby?
          </span>
        </div>
      </CardBody>
      <CardFooter classes="Form-Post-Footer">
        <FormPostUpload icon="bxs-video" text="Video Siaran Langsung" />
        <FormPostUpload classes="hide-sm" icon="bx-images" text="Foto/Video" />
      </CardFooter>
    </Card>
  )
}

export default CardCreatePost
