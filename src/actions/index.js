export const createIdentity = userProfile => ({
  type: 'IDENTITY_CREATE',
  userProfile
});

export const updatePushToken = pushToken => ({
  type: 'UPDATE_PUSH_TOKEN',
  pushToken
});
