import {Link} from 'react-router-dom'

const Linked = ({url, text, className}) => {
  return (
    <Link to={url} className={className}>
      {text}
    </Link>
  )
}

export default Linked
