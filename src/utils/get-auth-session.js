const getAuthSession = () => {
  return JSON.parse(sessionStorage.getItem("AUTH"));
};

export default getAuthSession;
