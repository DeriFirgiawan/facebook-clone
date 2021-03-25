export const SkeletonCard = ({children}) => {
  return (
    <div className="card mt-3" id="skeleton">
      <div className="card-body">
        <div className="Skeleton-Header">
          <Skeleton type="hero-40" />
          <div className="Skeleton-Header-text">
            <Skeleton type="title" />
            <Skeleton type="title" />
          </div>
        </div>
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
    </div>
  )
}

const Skeleton = ({type}) => {
  const classes = `Skeleton ${type}`
  return (
    <div className={classes}></div>
  )
}


export default Skeleton
