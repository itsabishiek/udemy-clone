const createError = (status, message) => {
  const error = new Error();
  error.stack = status;
  error.message = message;

  return error;
};

export default createError;
