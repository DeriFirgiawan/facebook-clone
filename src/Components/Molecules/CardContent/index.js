import {Card, CardBody, CardFooter} from '../../Atom/Card'
import {ImageProfile} from '../../Atom/DummyProfile'

const CardContent = () => {
  return (
    <Card classes="Post-Content mt-3 shadows-1 border-0">
      <CardBody classes="Post-Content-Body">
        <ImageProfile size="40" alt="user" />
      </CardBody>
      <CardFooter classes="Post-Content-Footer">
        Comment
      </CardFooter>
    </Card>
  )
}

export default CardContent
