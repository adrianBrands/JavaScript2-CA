import { signinrUrl } from "./API_URLs_export.mjs";
import {
  email,
  password,
  displayMessage,
  submit,
  checkIfLoggedIn,
} from "./register_signin_export.mjs";

/**
 * this function only runs when a click is detected at submit.addEventListener("click", valueInput);
 * @param {*} event
 */
function valueInput(event) {
  event.preventDefault();

  const userInput = {
    email: email.value,
    password: password.value,
  };
  /**
   * takes the url and fetch the userdata to run an API request
   * signs in a user by the imported signInUrl and the input values from-
   * the object userInput.
   * checks if all the requirments are met, if not an error message will be displayed
   * @param {string} url {API url}
   * @param {object} userData {method, headers, body}
   * @example
   * registerUser(signInUrl, userInput);
   */
  async function registerUser(url, userData) {
    console.log(url, userData);
    try {
      const postData = {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(userData),
      };
      const response = await fetch(url, postData);
      console.log(response);
      const json = await response.json();
      console.log(json);
      const accessToken = json.accessToken;

      if (json.email === email.value) {
        localStorage.setItem("accsessToken", accessToken);
        localStorage.setItem("userName", json.name);
        localStorage.setItem("avatar", json.avatar);
        window.open("profile.html", "_self");
      } else {
        displayMessage.innerHTML = `invalid email or password please try again`;
      }
    } catch (error) {
      console.log(error);
    }
  }

  registerUser(signinrUrl, userInput);
}

submit.addEventListener("click", valueInput);

checkIfLoggedIn();
