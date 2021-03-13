import {Card, CardBody} from '../../Atom/Card'

const StoryBar = () => {
  return (
    <Card classes="StoryBar">
      <CardBody classes="StoryBar-content">
        <div className="card-body-icon wh-40">
          <i className="bx bx-plus"></i>
        </div>
        <div className="card-body-text ms-3">
          <h5 className="card-body-text-heading">Buat Cerita</h5>
          <p className="card-body-text-paragraph">Bagikan foto atau tulis sesuatu</p>
        </div>
      </CardBody>
    </Card>
  )
}

export default StoryBar
