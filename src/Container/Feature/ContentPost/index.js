import React, { Fragment, Suspense } from 'react'

import { SkeletonCard } from '../../../Skeletons'
const CardContent = React.lazy(() => import('../../../Components/Molecules/CardContent'));

const ContentPost = (getState) => {
  const convertDateFormat = (date) => {
    const dateObject = new Date(date)
    return dateObject.toLocaleString("id-ID", {
      month: "long",
      day: "numeric",
      year: "numeric"
    })
  }
  return (
    <Fragment>
      {
        getState.length > 0 ? (
          <Fragment>
            {
              getState.map(result => {
                return(
                  <Suspense fallback={<SkeletonCard />} key={Math.random().toString(36).substr(2, 9)}>
                    <CardContent name={result.data.userName} date={convertDateFormat(result.data.date)} content={result.data.content} />
                  </Suspense>
                )
              })
            }
          </Fragment>
        ) : <SkeletonCard />
      }
    </Fragment>
  )
}

export default ContentPost
