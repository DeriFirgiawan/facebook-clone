/* eslint-disable array-callback-return */
import firebase, {database} from '../../Firebase'

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

export const addDataToApi = (data) => (dispatch) => {
  database.ref('post/' + data.userId).push({
    userName: data.userName,
    date: data.date,
    content: data.content
  })
}

export const getDataFromApi = () => (dispatch) => {
  const urlPost = database.ref('post/')
  return new Promise((resolve, reject) => {
    urlPost.on('value', function(snapshot) {
      console.log(snapshot.val())
      const data = []
      Object.keys(snapshot.val()).map(keys => {
        data.push({
          id: keys,
          data: snapshot.val()[keys],
          allData: data[keys]
        })
      })
      dispatch({type: "SET_POSTS", value: data})
      resolve(snapshot.val())
    })
  })
}
