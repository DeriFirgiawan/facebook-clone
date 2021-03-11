import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {getDataFromApi} from '../../../Config/Redux/action'
import FormCreatePost from '../../Feature/FormCreatePost'
import StoryBar from '../../../Components/Molecules/StoryBar'
import CardContent from '../../../Components/Molecules/CardContent'
import './_Dashboard.scss'

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getPost()
  }

  convertDateFormat = (date) => {
    const dateObject = new Date(date)
    return dateObject.toLocaleString("id-ID", {
      month: "long",
      day: "numeric",
      year: "numeric"
    })
  }
  render () {
    const {getAllPost} = this.props
    return (
      <div className="content">
        <StoryBar />
        <FormCreatePost />
        {
          getAllPost.length > 0 ? (
            <Fragment>
              {
                getAllPost.map(result => {
                  // const miliSeconds = result.data.date * 1000
                  // const dateObject = new Date(miliSeconds)
                  // const convertDateFormat = dateObject.toLocaleString()
                  // console.log(convertDateFormat)
                  return (
                    <CardContent key={result.id} name={result.data.userName} date={this.convertDateFormat(result.data.date)} content={result.data.content} />
                  )
                })
              }
            </Fragment>
          ) : null
        }
        
      </div>
    )
  }
}

const reduxState = (state) => ({
  getAllPost: state.posts
})

const reduxDispatch = (dispatch) => ({
  getPost: () => dispatch(getDataFromApi())
})

export default connect(reduxState, reduxDispatch)(Dashboard)
