export const isAuthenticated = () => {
  const accountId = localStorage.getItem('accountId');
  return accountId ? true : false;
};
