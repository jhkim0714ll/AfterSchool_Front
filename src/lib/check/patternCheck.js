export const emailCheck = (email) => {
  if (
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
      email
    )
  ) {
    return true;
  }
  return false;
};

export const passwordCheck = (password) => {
  if (/(?=.*\d{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/.test(password)) {
    return true;
  }
  return false;
};

export const phoneCheck = (phone) => {
  if (/^\d{3}-\d{4}-\d{4}$/.test(phone)) {
    return true;
  }
  return false;
};

export const numberCheck = (number) => {
  if (/[0-9]/g.test(number)) {
    return true;
  }
  return false;
};
