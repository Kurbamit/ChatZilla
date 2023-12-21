const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const IsValidEmailRegex = (email: string) => {
  return !!email.match(emailRegex);
};

export const ValidateEmail = (email: string) => {
  return IsValidEmailRegex(email);
};
