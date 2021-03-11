import React from 'react'
import {connect} from 'react-redux'
import {addDataToApi} from '../../../Config/Redux/action'

import Button from '../../../Components/Atom/Button'
import CardCreatePost from '../../../Components/Molecules/CardCreatePost'
import CreatePostModal from '../../../Components/Molecules/CreatePostModal'

class FormCreatePost extends React.Component {
  state = {
    content: ""
  }

  onChangeInput = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSavePost = () => {
    const {content} = this.state
    const {createPost} = this.props
    const getDataUser = JSON.parse(localStorage.getItem('userData'))
    const data = {
      userName: getDataUser.displayName,
      date: new Date().getTime(),
      content: content,
      userId: getDataUser.uid
    }
    createPost(data)
  }
  render () {
    const getDataUser = JSON.parse(localStorage.getItem('userData'))
    const fullName = getDataUser.displayName
    const shortName = fullName.split(' ')
    return (
      <>
        <CardCreatePost shortName={shortName[0]} />
        <CreatePostModal fullName={fullName} childInput={
          <textarea className="form-control" name="content" id="content" cols="30" rows="10" placeholder={`Apa yang Anda pikirkan, ${shortName[0]} ?`} onChange={this.onChangeInput} value={this.state.content} ></textarea>
        } 
        childButton={
          <Button color="primary" title="Kirim" onClick={this.handleSavePost} />
        } />
      </>
    )
  }
}

const reduxDispatch = (dispatch) => ({
  createPost: (data) => dispatch(addDataToApi(data))
})

export default connect(null, reduxDispatch)(FormCreatePost)
