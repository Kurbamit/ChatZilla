import { ValidateEmail } from "./EmailValidation";

let inputFieldsValidality = {
  isValidEmail: false,
  isValidUsername: false,
  isValidPassword: false,
  isValidRepeatPassword: false,
};

export const handleFormSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  email: string
) => {
  e.preventDefault();

  PrintErrorMessages();
};

export const handleEmailChange = (
  email: string,
  inputFieldDiv: HTMLDivElement | null
) => {
  inputFieldsValidality.isValidEmail = ValidateEmail(email);
  console.log("current email status: ", inputFieldsValidality.isValidEmail);

  const input = inputFieldDiv?.querySelector("input");
  if (input) {
    input.style.borderBottom = inputFieldsValidality.isValidEmail
      ? "1px solid green"
      : "1px solid red";
  }

  const label = inputFieldDiv?.querySelector("label");
  if (label) {
    label.style.color = inputFieldsValidality.isValidEmail ? "green" : "red";
  }
};

function PrintErrorMessages() {
  const emailErrorDiv = document.getElementById("email-error");
  if (emailErrorDiv) {
    if (!inputFieldsValidality.isValidEmail) {
      emailErrorDiv.textContent = "Please provide a valid email address";
    } else {
      emailErrorDiv.textContent = "";
    }
  }
}
