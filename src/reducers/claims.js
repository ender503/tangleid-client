const claims = (state = [], action) => {
  switch (action.type) {
    case "ADD_CLAIM":
      return [
        ...state,
        {
          ...action.claim
        }
      ];
    default:
      return state;
  }
};

export default claims;
