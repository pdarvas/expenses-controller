export const getUser = () => {
  return localStorage.getItem('user')
};

export const setUser = (user) => {
  return localStorage.setItem('user', user)
};
