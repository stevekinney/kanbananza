export const USER_CREATE = 'USER_CREATE';

const defaultUserData = {
  name: '',
  email: '',
};

export const createUser = userData => {
  const userId = Date.now().toString();
  const user = {
    id: userId,
    ...defaultUserData,
    ...userData,
  };

  return {
    type: USER_CREATE,
    payload: { user, userId },
  };
};
