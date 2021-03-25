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
    dispatch({type: "CHANGE_ISLOGIN", value: true })
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
        dispatch({type: "CHANGE_ISLOGIN", value: false})
        const errorCode = error.code
        const errorMessage = error.message
        console.error(errorCode)
        console.error(errorMessage)
        reject(false)
      })
  })
}

export const logoutToApi = () => {
  return dispatch => {
    dispatch({
      type: "CHANGE_ISLOGIN",
      value: false
    })
    localStorage.removeItem("userData")
  }
}

export const addDataToApi = (data) => (dispatch) => {
  database.ref('post/' + data.userId).push({
    userName: data.userName,
    date: data.date,
    content: data.content
  })
}

export const getDataFromApi = (userId) => (dispatch) => {
  const urlPost = database.ref("post/")
  
  return new Promise((resolve, reject) => {
    urlPost.on('value', function(snapshot) {
      const data = []
      if (snapshot.val()) {
        Object.keys(snapshot.val()).map(keys => {
          const uniqueId = snapshot.val()[keys]
          Object.keys(uniqueId).map(resultUniqueID => {
            data.push({
              id: resultUniqueID,
              data: uniqueId[resultUniqueID]
            })
          })
        })
      }
      const dataReverseOrder = Array.prototype.reverse.call(data)
      dispatch({type: "SET_POSTS", value: dataReverseOrder})
      resolve(snapshot.val())
    })
  })
}

export const getDataPostById = userId => dispatch => {
  const urlPostById = database.ref("post/" + userId)
  return new Promise((resolve, reject) => {
    urlPostById.on("value", function(snapshot) {
      const dataById = []
      if (snapshot.val()) {
        Object.keys(snapshot.val()).map(key => {
          dataById.push({
            id: key,
            data: snapshot.val()[key]
          })
        })
      }
      const dataReverseOrder = Array.prototype.reverse.call(dataById)
      dispatch({type: "SET_POSTS_BY_ID", value: dataReverseOrder})
      resolve(snapshot.val())
    })
  })
}
