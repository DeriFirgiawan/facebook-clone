import {Fragment} from 'react'

import CardContent from '../../../Components/Molecules/CardContent'

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
                  <CardContent key={result.id} name={result.data.userName} date={convertDateFormat(result.data.date)} content={result.data.content} />
                )
              })
            }
          </Fragment>
        ) : null
      }
    </Fragment>
  )
}

export default ContentPost
