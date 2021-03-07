import firebase from '../../Firebase'

export const changeShowModal = () => {
  return (dispatch) => {
    return dispatch({
      type: "CHANGE_MODAL",
      value: true
    })
  }
}

export const registerUserToFirebase = (data) => (dispatch) => {
  dispatch({type: "CHANGE_ISLOADING", value: true})
  let user = null
  return (
    firebase.auth().createUserWithEmailAndPassword(data.emailField, data.passwordField)
    .then(res => {
      console.log(res)
      dispatch({type: "CHANGE_ISLOADING", value: true})
    })
    .then(function() {
      user = firebase.auth().currentUser
    })
      .then(function() {
      user.updateProfile({
        displayName: data.userName
      })
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.error(errorCode)
      console.error(errorMessage)
      dispatch({type: "CHANGE_ISLOADING", value: false})
    })
  )
}

export const loginUserToAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({type: "CHANGE_ISLOADING", value: true})
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then(res => {
        const dataUser = {
          displayName: res.user.displayName,
          email: res.user.email,
          uid: res.user.uid,
          refreshToken: res.user.refreshToken
        }
        dispatch({type: "CHANGE_ISLOADING", value: false})
        dispatch({type: "CHANGE_USER", value: dataUser })
        resolve(dataUser)
      })

      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(errorCode)
        console.error(errorMessage)
        reject(false)
      })
  })
}
