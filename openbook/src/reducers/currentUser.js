const currentUserReducer = (state = null, action) => {
    switch (action.type) {
      case 'FETCH_CURRENT_USER':
        return action.payload;
      // case 'UPDATE_CURRENT_USER':
      //   return {
      //     ...state,
      //     ...action.payload
      //   };
      default:
        return state;
    }
  };
  
  export default currentUserReducer;