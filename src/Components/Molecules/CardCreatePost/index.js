import {Card, CardBody, CardFooter} from '../../Atom/Card'
import {ImageProfile} from '../../Atom/DummyProfile'
import FormPostUpload from './FormPostUpload'

const CardCreatePost = ({shortName}) => {
  return (
    <Card classes="Form-Post mt-3 shadows-1 border-0">
      <CardBody classes="Form-Post-Body">
        <ImageProfile size="40" alt="user" />
        <div className="Form-Post-Body-Input ms-3" role="button" data-bs-toggle="modal" data-bs-target="#showModal">
          <span className="Form-Post-Body-Input-Text">
            Apa yang Anda pikirkan, {shortName} ?
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
