const initialState = {
    dataRegister: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
  };
  
  const register = (state = initialState, action) => {
    switch (action.type) {
      case 'POST_REGISTER_PENDING':
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      case 'POST_REGISTER_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'POST_REGISTER_FULFILLED':
      state.dataRegister.push (action.payload.data.result);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        dataRegister: state.dataRegister,
      };
      default:
        return state;
    }
  };
  
  export default register;
  