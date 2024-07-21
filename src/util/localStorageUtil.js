const USER_ID_KEY = "userId";

export const getUserIdInLocalStorage = () => {
  return localStorage.getItem(USER_ID_KEY);
};

export const setUserIdInLocalStorage = (userId) => {
  localStorage.setItem(USER_ID_KEY, userId);
};

export const removeUserIdFromLocalStorage = () => {
  localStorage.removeItem(USER_ID_KEY);
};
