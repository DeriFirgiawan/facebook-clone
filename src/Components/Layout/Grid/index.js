export const Row = ({children}) => {
  return (
    <div className="row">
      {children}
    </div>
  )
}

export const Columns = ({children, size}) => {
  return (
    <div className={size}>
      {children}
    </div>
  )
}

Columns.defaultProps = {
  size: 'col'
}
