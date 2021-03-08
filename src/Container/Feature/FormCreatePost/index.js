import React from 'react'
import {connect} from 'react-redux'

import Button from '../../../Components/Atom/Button'
import CardCreatePost from '../../../Components/Molecules/CardCreatePost'
import CreatePostModal from '../../../Components/Molecules/CreatePostModal'

class FormCreatePost extends React.Component {
  render () {
    const fullName = this.props.dataUser.displayName
    const shortName = fullName.split(' ')
    return (
      <>
        <CardCreatePost shortName={shortName[0]} />
        <CreatePostModal fullName={fullName} childInput={
          <textarea className="form-control" name="content" id="content" cols="30" rows="10" placeholder={`Apa yang Anda pikirkan, ${shortName[0]} ?`}></textarea>
        } childButton={
          <Button color="primary" title="Kirim" />
        } />
      </>
    )
  }
}

const reduxState = (state) => ({
  dataUser: state.user
})

export default connect(reduxState, null)(FormCreatePost)
