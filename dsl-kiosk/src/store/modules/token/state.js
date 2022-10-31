export default () => {
  return { token: JSON.parse(localStorage.getItem("token")) };
};
