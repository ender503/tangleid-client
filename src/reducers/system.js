const claims = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PUSH_TOKEN":
      return {
        ...state,
        pushToken: action.pushToken
      };
    default:
      return state;
  }
};

export default claims;
