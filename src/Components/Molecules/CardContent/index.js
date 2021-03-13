import {Card, CardBody, CardFooter} from '../../Atom/Card'
import Dropdown, {DropdownMenu} from '../../Atom/Dropdown'
import {ImageProfile} from '../../Atom/DummyProfile'

const CardContent = ({name, date, content}) => {
  return (
    <Card classes="Post-Content mt-3">
      <CardBody classes="Post-Content-Body">
        <div className="Post-Content-Body-Profile">
          <ImageProfile size="40" alt={name} />
          <div className="Post-Content-Body-Profile-Information mt-1 ms-3">
            <p className="Profile-Name fw-bold">
              {name}
            </p>
            <span className="text-muted">
              {date}
            </span>
          </div>
          <Dropdown classes="Post-Content-Body-More" icon="bx-dots-horizontal-rounded" position="ms-auto">
            <DropdownMenu />
          </Dropdown>
        </div>
        <article className="Post-Content-Body-Content">
          <span className="Text-Content">
            {content}
          </span>
        </article>
      </CardBody>
      <CardFooter classes="Post-Content-Footer">
        <div className="Post-Content-Footer-Comment">
          <div className="Post-Icon">
            <i className="bx bx-like icon-size-24"></i>
            <span className="Post-Icon-Text ms-2">
              Suka
            </span>
          </div>
          <div className="Post-Icon">
            <i className="bx bx-comment icon-size-24"></i>
            <span className="Post-Icon-Text ms-2">
              Komentari
            </span>
          </div>
          <div className="Post-Icon">
            <i className="bx bx-share icon-size-24"></i>
            <span className="Post-Icon-Text ms-2">
              Bagikan
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CardContent
