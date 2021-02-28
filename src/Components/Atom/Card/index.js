export const Card = ({children, clasess}) => {
  return (
    <div className={"card " + clasess}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  classes: ""
}

export const CardBody = ({children, clasess}) => {
  return (
    <div className={"card-body " + clasess}>
      {children}
    </div>
  )
}

CardBody.defaultProps = {
  classes: ""
}
