const setAuthSession = (user) => {
  console.log(user);

  sessionStorage.setItem("AUTH", JSON.stringify(user));
};

export default setAuthSession;
