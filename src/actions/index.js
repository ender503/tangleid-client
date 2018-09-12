export const createIdentity = userProfile => ({
  type: 'IDENTITY_CREATE',
  userProfile
});

export const addClaim = claim => ({
  type: 'ADD_CLAIM',
  claim
});

export const updatePushToken = pushToken => ({
  type: 'UPDATE_PUSH_TOKEN',
  pushToken
});
