export const Card = ({children, classes}) => {
  return (
    <div className={"card " + classes}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  classes: ""
}

export const CardBody = ({children, classes}) => {
  return (
    <div className={"card-body " + classes}>
      {children}
    </div>
  )
}

CardBody.defaultProps = {
  classes: ""
}

export const CardFooter = ({children, classes}) => {
  return (
    <div className={"card-footer " + classes}>
      {children}
    </div>
  )
}

CardFooter.defaultProps = {
  classes: ""
}
