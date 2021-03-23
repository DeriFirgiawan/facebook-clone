/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getDataPostById } from '../../../Config/Redux/action'

import FormCreatePost from '../../Feature/FormCreatePost'
import ContentPost from '../../Feature/ContentPost'
import BannerProfile from '../../../Components/Molecules/BannerProfile'

const Profile = ({fullName, getAllPostById, getPost}) => {
  const getDataUser = JSON.parse(localStorage.getItem("userData"))
  useEffect(() => {
    getPost(getDataUser.uid)
  }, [getPost])
  return (
    <main className="Profile-Page">
      <BannerProfile name={fullName} />
      <div className="Profile-Page-Content container mt-3">
        <FormCreatePost />
        {
          ContentPost(getAllPostById)
        }
      </div>
    </main>
  )
}

const mapStateToProps = (state) => ({
  getAllPostById: state.postById
})

const mapDispatchToProps = (dispatch) => ({
  getPost: (data) => dispatch(getDataPostById(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
