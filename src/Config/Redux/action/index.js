export const changeShowModal = () => {
  return (dispatch) => {
    return dispatch({
      type: "CHANGE_MODAL",
      value: true
    })
  }
}
