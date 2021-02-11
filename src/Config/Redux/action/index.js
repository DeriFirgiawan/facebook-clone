// import firebase from '../../Firebase'

export const changeShowModal = () => {
  return (dispatch) => {
    return dispatch({
      type: "CHANGE_MODAL",
      value: true
    })
  }
}

// export const RegisterToApi = (data) => ({
//   return 
// })
