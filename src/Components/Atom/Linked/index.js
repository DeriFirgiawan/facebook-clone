import {Link} from 'react-router-dom'

const Linked = ({url, text, className, children}) => {
  return (
    <Link to={url} className={className}>
      {children || text}
    </Link>
  )
}

export default Linked
