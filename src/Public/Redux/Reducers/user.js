const initialState = {
    userList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
  };
  
const user = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_PENDING':
        return {
            ...state,
            isLoading: true,
            isRejected: false,
            isFulfilled: false,
        };
        case 'GET_USER_REJECTED':
        return {
            ...state,
            isLoading: false,
            isRejected: true,
        };
        case 'GET_USER_FULFILLED':
        return {
            ...state,
            isLoading: false,
            isFulfilled: true,
            userList: action.payload.data.result,
        };
    default:
        return state;
    }
};
export default user;