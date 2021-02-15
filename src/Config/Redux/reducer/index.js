const initialState = {
  passwordValidation: 'Password minimal 8 character',
  showModal: false,
  isLoading: true
}

const reducer = (state=initialState, action) => {
  if (action.type === 'SHOW_PW_VALIDATION') {
    return {
      ...state,
      passwordValidation: action.value
    }
  }

  if (action.type === "CHANGE_MODAL") {
    return {
      ...state,
      showModal: action.value
    }
  }

  if (action.type === "CHANGE_ISLOADING") {
    return {
      ...state,
      isLoading: action.value
    }
  }

  return state
}

export default reducer
