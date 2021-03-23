import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getDataFromApi} from '../../../Config/Redux/action'
import FormCreatePost from '../../Feature/FormCreatePost'
import ContentPost from '../../Feature/ContentPost'
import StoryBar from '../../../Components/Molecules/StoryBar'

const Dashboard = ({getAllPost, getPost}) => {
  useEffect(() => {
    getPost()
  }, [getPost])
  return (
    <div className="content">
      <StoryBar />
      <FormCreatePost />
      {
        ContentPost(getAllPost)
      }
    </div>
  )
}

const reduxState = (state) => ({
  getAllPost: state.posts
})

const reduxDispatch = (dispatch) => ({
  getPost: () => dispatch(getDataFromApi())
})

export default connect(reduxState, reduxDispatch)(Dashboard)
