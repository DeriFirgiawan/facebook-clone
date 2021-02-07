export const TextInfo = ({color, text}) => {
  return (
    <small className={"text-" + color}>
      {text}
    </small>
  )
}
