const email = document.querySelector("#floatingInput");
const password = document.querySelector("#floatingPassword");
const displayMessage = document.querySelector(".h1");
const removeForm = document.querySelectorAll(".form-floating");
const submit = document.querySelector("#submit");
const username = document.querySelector("#username");
const avatar = document.querySelector("#avatar");
const displayErrorMessage = document.querySelector(".h1");
const displaySignInButton = document.querySelector(".send_to_signin");

/**
 * this functon validates the email
 *  
 */
const validateEmail = (email) => {
  const regEx = /^[\w\-.]+@(stud.)?noroff.no$/g;
  const patternMatches = regEx.test(email);
  return patternMatches;
};

/**
 * this function checks if the user is logged in
 */
const checkIfLoggedIn = () => {
  const getLocal = localStorage.getItem("accsessToken");
  if (getLocal !== null) {
    removeForm.forEach((e) => {
      e.style.display = "none";
    });
    displayMessage.innerHTML = `You are logged in`;
    submit.style.display = "none";
  }
};

export {
  email,
  password,
  displayMessage,
  removeForm,
  submit,
  avatar,
  validateEmail,
  username,
  displayErrorMessage,
  displaySignInButton,
  checkIfLoggedIn,
};
