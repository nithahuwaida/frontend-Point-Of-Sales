const initialState = {
    dataLogin: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
  };
  
  const login = (state = initialState, action) => {
    switch (action.type) {
      case 'POST_LOGIN_PENDING':
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      case 'POST_LOGIN_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'POST_LOGIN_FULFILLED':
      state.dataLogin.push (action.payload.data.result);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        dataLogin: state.dataLogin,
      };
      default:
        return state;
    }
  };
  
  export default login;
  