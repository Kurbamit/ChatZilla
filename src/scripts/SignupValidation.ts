import { ValidateEmail } from "./EmailValidation";
import { ValidateUsername } from "./UsernameValidation";

let inputFieldsValidality = {
  isValidEmail: false,
  isValidUsername: false,
  isValidPassword: false,
  isValidRepeatPassword: false,
};

export const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  PrintErrorMessages();
};

export const handleEmailChange = (
  email: string,
  inputFieldDiv: HTMLDivElement | null
) => {
  inputFieldsValidality.isValidEmail = ValidateEmail(email);
  console.log("current email status: ", inputFieldsValidality.isValidEmail);

  ChangeUI(inputFieldsValidality.isValidEmail, inputFieldDiv);
};

export const handleUsernameChange = (
  username: string,
  inputFieldDiv: HTMLDivElement | null
) => {
  inputFieldsValidality.isValidUsername = ValidateUsername(username);
  console.log(
    "current username status: ",
    inputFieldsValidality.isValidUsername
  );

  ChangeUI(inputFieldsValidality.isValidUsername, inputFieldDiv);
};

function PrintErrorMessages() {
  const emailErrorDiv = document.getElementById("email-error");
  const usernameErrorDiv = document.getElementById("username-error");

  PrintErrorMessage(
    inputFieldsValidality.isValidEmail,
    "Please provide a valid email address",
    emailErrorDiv
  );

  PrintErrorMessage(
    inputFieldsValidality.isValidUsername,
    "Username should be between 4 and 20 characters",
    usernameErrorDiv
  );
}

function PrintErrorMessage(
  isValid: boolean,
  errorMessage: string,
  errorDiv: HTMLElement | null
) {
  if (errorDiv) {
    if (!isValid) {
      errorDiv.textContent = errorMessage;
    } else {
      errorDiv.textContent = "";
    }
  }
}

function ChangeUI(isValid: boolean, inputFieldDiv: HTMLDivElement | null) {
  const input = inputFieldDiv?.querySelector("input");
  if (input) {
    input.style.borderBottom = isValid ? "1px solid green" : "1px solid red";
  }

  const label = inputFieldDiv?.querySelector("label");
  if (label) {
    label.style.color = isValid ? "green" : "red";
  }
}
