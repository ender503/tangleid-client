const user = (state = {}, action) => {
  switch (action.type) {
    case 'IDENTITY_CREATE':
      return {
        ...state,
        ...action.userProfile
      }
    default:
      return state;
  }
};

export default user;