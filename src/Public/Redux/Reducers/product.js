const initialState = {
    productList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false,
  };
  
  const product = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PRODUCT_PENDING':
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      case 'GET_PRODUCT_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'GET_PRODUCT_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          productList: action.payload.data.response,
        };
      case 'POST_PRODUCT_PENDING':
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      case 'POST_PRODUCT_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'POST_PRODUCT_FULFILLED':
      state.productList.push (action.payload.data);
      // console.log('okee',action.payload.data)
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        productList: state.productList,
      };
      case 'PATCH_PRODUCT_PENDING':
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      case 'PATCH_PRODUCT_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'PATCH_PRODUCT_FULFILLED':
        const dataAfterPatch = state.productList.map (product => {
          console.log('payloadid12',action.payload.data.data.id_product)
          if (product.id_product === action.payload.data.data.id_product) {
            return action.payload.data.data;
            console.log('payloadid',action.payload.data.data.id_product)
            console.log('payload',action.payload.data.data)
          }
          console.log('productid',product.id)
          console.log('productid2',product.id_product)
          console.log('product',product)
          return product;
        });
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          productList: dataAfterPatch,
        };
      case 'DELETE_PRODUCT_PENDING':
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false,
        };
      case 'DELETE_PRODUCT_REJECTED':
        return {
          ...state,
          isLoading: false,
          isRejected: true,
        };
      case 'DELETE_PRODUCT_FULFILLED':
        const dataAfterDelete = state.productList.filter (
          product => product.id_product !== action.payload.data.id
        );
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          productList: dataAfterDelete,
        };
      default:
        return state;
    }
  };
  
  export default product;
  