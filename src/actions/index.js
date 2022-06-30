export const GET_NAME = 'GET_NAME';
export const GET_EMAIL = 'GET_EMAIL';

export const getName = (name) => ({
  type: GET_NAME,
  payload: name,
});

export const getEmail = (email) => ({
  type: GET_EMAIL,
  payload: email,
});
