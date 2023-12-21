function IsValidLength(usernameLength: number) {
  if (usernameLength >= 4 && usernameLength <= 20) {
    return true;
  } else {
    return false;
  }
}

export const ValidateUsername = (username: string) => {
  return IsValidLength(username.length);
};
