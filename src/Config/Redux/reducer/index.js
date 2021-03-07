const initialState = {
  passwordValidation: "Password minimal 8 character",
  isLoading: true,
  user: {}
}

const reducer = (state=initialState, action) => {
  if (action.type === "SHOW_PW_VALIDATION") {
    return {
      ...state,
      passwordValidation: action.value
    }
  }

  if (action.type === "CHANGE_ISLOADING") {
    return {
      ...state,
      isLoading: action.value
    }
  }
  
  if (action.type === "CHANGE_USER") {
    return {
      ...state,
      user: action.value
    }
  }

  return state
}

export default reducer
