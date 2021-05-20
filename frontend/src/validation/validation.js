export const validateSignInEmail = (email) => {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateSignInPassword = (password) => {
  if (/[A-Za-z0-9]{6,14}/.test(password)) {
    return true;
  } else {
    return false;
  }
};
