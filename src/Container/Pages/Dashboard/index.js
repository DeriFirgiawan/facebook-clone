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
                getAllPost.map(resultId => {
                  const dataPost = Object.values(resultId.data)
                  return dataPost.map(resultData => {
                    return (
                      <CardContent key={resultId.id} name={resultData.userName} date={resultData.date} content={resultData.content} />
                    )
                  })
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
