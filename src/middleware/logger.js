const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("ACTION :", action);
  const res = next(action);
  console.log("STATE :", store.getState());
  console.groupEnd();
  return res;
};

export default logger;
