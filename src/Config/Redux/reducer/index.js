const initialState = {
  passwordValidation: "Password minimal 8 character",
  isLoading: true,
  isLogin: false,
  user: {},
  posts: [],
  postById: []
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

  if (action.type === "SET_POSTS") {
    return {
      ...state,
      posts: action.value
    }
  }

  if (action.type === "SET_POSTS_BY_ID") {
    return {
      ...state,
      postById: action.value
    }
  }

  if (action.type === "CHANGE_ISLOGIN") {
    return {
      ...state,
      isLogin: action.value
    }
  }

  return state
}

export default reducer
